<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function watch(int $projectId)
    {
        $project = Project::findOrFail($projectId);

        return view('player', ['project' => $project]);
    }

    public function fetch(int $id)
    {
        if (!request()->ajax()) return view('index');

        $project = Project::with('nodes')->findOrFail($id);
        return response()->json(['project' => $project]);
    }
}
