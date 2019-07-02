<?php

namespace Tests\Feature;

use App\Node;
use App\Project;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class NodeTest extends TestCase
{
    use RefreshDatabase;

    private $headers = ['X-Requested-With' => 'XMLHttpRequest'];
    private $user;
    private $url = 'https://www.youtube.com/watch?v=DI3yXg-sX5c';

    protected function setUp(): void {
        parent::setUp();

        $this->user = factory(User::class)->create();
    }

    public function test_can_add_node_to_project()
    {
        $project = factory(Project::class)->create(['user_id' => $this->user]);
        $parentNode = $project->nodes()->create(['title' => 'Parent node', 'parent_id' => 0]);

        $data = [
            'title' => 'test node title',
            'parent_id' => $parentNode->id,
            'url' => $this->url,
        ];
        $response = $this->actingAs($this->user)->json('post', "/projects/{$project->id}/nodes", $data, $this->headers);

        $response->assertStatus(200);

        $res = $response->decodeResponseJson();
        $node = $res['node'];

        $this->assertNotEmpty($node);
        $this->assertEquals($data['title'], $node['title']);
        $this->assertEquals($parentNode->id, $node['parent_id']);
    }

    public function test_can_update_node()
    {
        $this->withoutExceptionHandling();
        $project = factory(Project::class)->create(['user_id' => $this->user]);
        $node = $project->nodes()->create(['title' => 'Parent node', 'parent_id' => 0, 'url' => $this->url]);

        $data = [
            'title' => 'updated node title',
            'parent_id' => 101,
            'url' => 'https://www.youtube.com/watch?v=2soGJXQAQec',
        ];
        $response = $this->actingAs($this->user)->json('put', "/projects/{$project->id}/nodes/{$node->id}", $data, $this->headers);

        $response->assertStatus(200);

        $node = Node::find($node->id);
        $this->assertEquals($data['title'], $node->title);
        $this->assertEquals($data['parent_id'], $node->parent_id);
        $this->assertEquals($data['url'], $node->url);
    }

}
