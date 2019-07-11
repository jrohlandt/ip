<?php

namespace App\Http\Controllers;

use App\Http\Requests\NodeCreate;
use App\Http\Requests\NodeCreate as NodeUpdate;

use App\Node;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ProjectNodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    // Store
    public function store(NodeCreate $request, int $projectId): JsonResponse
    {
        $data = $request->validated();
        $project = Auth::user()->projects()->findOrFail($projectId);
        $node = $project->nodes()->create($data);

        return response()->json(['node' => $node]);
    }


    public function update(NodeUpdate $request, int $projectId, int $nodeId): JsonResponse
    {
        $validated = $request->validated();
        $project = Auth::user()->projects()->findOrFail($projectId);
        $node = $project->nodes()->findOrFail($nodeId);
        $node->title = $validated['title'];
        $node->parent_id = $validated['parent_id'];
        $node->url = $validated['url'];
        $node->interactor = $validated['interactor'];

        $node->save();

        return response()->json([]);
    }


    public function destroy(int $projectId, int $nodeId): JsonResponse
    {
        $project = Auth::user()->projects()->findOrFail($projectId);
        $node = $project->nodes()->findOrFail($nodeId);
        $node->delete();

        return response()->json([]);
    }
}
