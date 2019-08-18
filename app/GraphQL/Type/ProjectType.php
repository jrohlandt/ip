<?php

namespace App\GraphQL\Type;

use App\Project;
use GraphQL\Type\Definition\Type;
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
            'user_id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The project belongs to this user'
            ],
            'title' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Project title'
            ],
            'settings' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Project settings, e.g. {autoplay: true}'
            ],
        ];
    }


}