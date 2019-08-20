<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use App\Project;
use Closure;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Auth;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\SelectFields;
use Rebing\GraphQL\Support\Query;

class ProjectQuery extends Query
{
    protected $attributes = [
        'name' => 'Project query'
    ];

    public function type(): Type
    {
        return GraphQL::type('Project');
    }

    public function args(): array
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::int()
            ],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        /** @var SelectFields $fields */
        $fields = $getSelectFields();
        $select = $fields->getSelect();
        $with = $fields->getRelations();

        if (isset($args['id'])) {
            $project = Auth::user()->projects()->find($args['id']);
        }


        $project->nodes = json_decode($project->nodes);
//        $project = Project::with($with)
//            ->where('user_id', Auth::user()->id)
//            ->find($args['id']);
//
//
        return $project;

    }
}
