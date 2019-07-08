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
}
