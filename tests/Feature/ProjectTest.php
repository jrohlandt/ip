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
        $this->assertEquals($this->user->id, $project['user_id']);
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

    public function test_user_can_update_project()
    {
        $project = factory(Project::class)->create(['title' => 'test title', 'user_id' => $this->user->id]);

        $response = $this->actingAs($this->user)->json('put', "projects/{$project->id}", ['title' => 'updated title']);

        $response->assertStatus(200);

        $project = Project::find($project->id);
        $this->assertEquals('updated title', $project->title);
    }

    public function test_user_cannot_update_another_users_project()
    {

        $otherUser = factory(User::class)->create();
        $project = factory(Project::class)->create(['title' => 'test title', 'user_id' => $otherUser->id]);

        $response = $this->actingAs($this->user)->json('put', "projects/{$project->id}", ['title' => 'updated title']);

        $response->assertStatus(404);

        $project = Project::find($project->id);
        $this->assertEquals('test title', $project->title);
    }


    public function test_user_can_delete_project()
    {
        $project = factory(Project::class)->create(['title' => 'test title', 'user_id' => $this->user->id]);

        $response = $this->actingAs($this->user)->json('delete', "projects/{$project->id}");

        $response->assertStatus(200);
        $this->assertNull(Project::find($project->id));
    }


}
