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
        $parentNode = factory(Node::class)->states('parent')->create(['project_id' => $project->id]);

        $data = [
            'title' => 'test node title',
            'parent_id' => $parentNode->id,
            'url' => $this->url,
            'interactions' => ["fork" => []],
        ];
        $response = $this->actingAs($this->user)
            ->json('post', "/projects/{$project->id}/nodes", $data, $this->headers);

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
        $node = factory(Node::class)->create(['project_id' => $project->id]);

        $data = [
            'title' => 'updated node title',
            'parent_id' => 102,
            'url' => 'https://www.youtube.com/watch?v=2soGJXQAQec',
            'interactions' => ["fork" => []],
        ];
        $response = $this->actingAs($this->user)
            ->json(
                'put',
                "/projects/{$project->id}/nodes/{$node->id}",
                $data,
                $this->headers
            );

        $response->assertStatus(200);

        $node = Node::find($node->id);
        $this->assertEquals($data['title'], $node->title);
        $this->assertEquals($data['parent_id'], $node->parent_id);
        $this->assertEquals($data['url'], $node->url);
    }

    public function test_can_delete_node()
    {
        $project = factory(Project::class)->create(['user_id' => $this->user]);
        $node = factory(Node::class)->create(['project_id' => $project->id]);

        $response = $this->actingAs($this->user)
            ->json(
                'delete',
                "/projects/{$project->id}/nodes/{$node->id}",
                []
            );

        $response->assertStatus(200);

        $this->assertNull(Node::find($node->id));
    }

    public function test_cannot_delete_parent_node()
    {
        $project = factory(Project::class)->create(['user_id' => $this->user]);
        $node = factory(Node::class)
            ->state('parent')
            ->create(['project_id' => $project->id]);

//        dd($node);
        $response = $this->actingAs($this->user)
            ->json(
                'delete',
                "/projects/{$project->id}/nodes/{$node->id}",
                []
            );

        $response->assertStatus(200);

        $this->assertNotNull(Node::find($node->id));
    }

}
