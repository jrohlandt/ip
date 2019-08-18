<?php

namespace App\GraphQL\Queries;

use App\Project;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

class ProjectsQuery extends Query
{
    protected $attributes = [
        'name' => 'projects',
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