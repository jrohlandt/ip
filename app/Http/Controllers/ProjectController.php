<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectCreate;
use App\Http\Requests\ProjectCreate as ProjectUpdate;
use App\Project;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (!request()->ajax()) {
            return view('index');
        }

        $projects = Project::where('user_id', Auth::user()->id)->all();
        return response()->json(['projects' => $projects]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('index');
    }

    public function store(ProjectCreate $request): JsonResponse
    {
        $project = Project::create([
            'user_id' => Auth::user()->id,
            'title' => request('title'),
        ]);

        $project->nodes()->create(['title' => 'Parent node']);

        return response()->json(['project' => $project]);
    }


    public function fetch(int $id)
    {
        if (!request()->ajax()) return view('index');

        $project = Project::with('nodes')->where('user_id', Auth::user()->id)->findOrFail($id);
        return response()->json(['project' => $project]);
    }



    public function update(ProjectUpdate $request, int $id): JsonResponse
    {
        //
    }


    public function destroy(int $id): JsonResponse
    {
        $project = Project::where('user_id', Auth::user()->id)->findOrFail($id);
        $project->delete();

        return response()->json([]);
    }
}
