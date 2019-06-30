<?php

namespace Tests\Feature;

use App\Project;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProjectTest extends TestCase
{
    use RefreshDatabase;

    private $headers = ['X-Requested-With' => 'XMLHttpRequest'];
    private $user;

    protected function setUp(): void {
        parent::setUp();

        $this->user = factory(User::class)->create();
    }

    public function test_can_create_new_project()
    {
        $data = ['title' => 'test title', 'options' => ['interaction' => 'on_end']];
        $response = $this->actingAs($this->user)->json('post', '/projects', $data, $this->headers);

        $response->assertStatus(200);

        $res = $response->decodeResponseJson();
        $project = $res['project'];

        $this->assertNotEmpty($project);
        $this->assertEquals('test title', $project['title']);
    }

    public function test_can_fetch_project()
    {
        $project = factory(Project::class)->create(['user_id' => $this->user->id]);

        $response = $this->actingAs($this->user)
                        ->json('get', "/projects/{$project->id}", [], $this->headers);

        $response->assertStatus(200);

        $res = $response->decodeResponseJson();
        $project = $res['project'];

        $this->assertNotEmpty($project);
        $this->assertEquals($this->user->id, $project['user_id']);
    }

    public function test_cannot_fetch_another_users_project()
    {
        $project = factory(Project::class)->create(['user_id' => $this->user->id]);

        $otherUser = factory(User::class)->create();
        $response = $this->actingAs($otherUser)
            ->json('get', "/projects/{$project->id}", [], $this->headers);

        $response->assertStatus(404);
    }
}
