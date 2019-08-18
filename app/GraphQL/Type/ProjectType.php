<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;

class ProjectType extends GraphQLType
{
    protected $attributes = [
      'name' => 'Project',
      'description' => 'A project'
    ];

    public function fields()
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
        ];
    }
}