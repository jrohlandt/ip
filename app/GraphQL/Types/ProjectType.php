<?php

namespace App\GraphQL\Types;

use App\Project;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ProjectType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Project',
        'description' => 'A project',
        'model' => Project::class
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'MySQL id of the projects row'
            ],
            'title' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Project title'
            ],
            'settings' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Project settings, e.g. {autoplay: true}'
            ],
            'nodes' => [
                'type' => Type::listOf(GraphQL::type('Node')),
            ]
        ];
    }


}