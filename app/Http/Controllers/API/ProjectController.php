<?php

namespace App\Http\Controllers\API;

use App\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function fetch(int $id)
    {
        if (!request()->ajax()) return view('index');

        $project = Project::with('nodes')->findOrFail($id);
        return response()->json(['project' => $project]);
    }
}
