<?php

namespace App\Http\Controllers;

use App\Http\Requests\NodeCreate;
use App\Http\Requests\NodeUpdate;

use App\Node;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ProjectNodeController extends Controller
{
    // Store
    public function store(NodeCreate $request, int $projectId): JsonResponse
    {
        $data = $request->validated();
        $project = Auth::user()->projects()->findOrFail($projectId);
        $node = $project->createNode($data);

        return response()->json(['node' => $node]);
    }


    public function update(NodeUpdate $request, int $projectId, int $nodeId): JsonResponse
    {
        $validated = $request->validated();

        $project = Auth::user()->projects()->findOrFail($projectId);
        $node = $project->nodes()->findOrFail($nodeId);
        $node->title = $validated['title'];
        $node->parent_id = $validated['parent_id'];
        $node->url = !empty($validated['url']) ? $validated['url'] : '';
        $node->interactions = $validated['interactions'];

        $node->save();

        return response()->json([]);
    }


    public function destroy(int $projectId, int $nodeId): JsonResponse
    {
        $project = Auth::user()->projects()->findOrFail($projectId);
        $node = $project->nodes()->findOrFail($nodeId);
//        dd($nodeId, $node, $node->isRootNode());
        if (!$node->isRootNode()) {
            $node->delete();
        }

        return response()->json([]);
    }
}
