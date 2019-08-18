<?php

namespace App\GraphQL\Query;

use App\Project;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class ProjectsQuery extends Query
{
    protected $attributes = [
        'name' => 'projects',
        'description' => 'get all projects',
        'model' => Project::class,
    ];

    public function type(): Type
    {
        return Type::listOf(GraphQL::type('Project'));
    }

//    public function args(): array
//    {
//        return [
//
//        ];
//    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return Project::all();
    }
}
