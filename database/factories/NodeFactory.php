<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Node;
use Faker\Generator as Faker;

$factory->define(Node::class, function (Faker $faker) {
    return [
        'title' => 'Parent node',
        'parent_id' => 9999,
        'url' => 'https://example.com/video.mp4',
        'interactions' => ['fork' => ['enabled' => false, 'type' => 'on_end']],
    ];
});

$factory->state(Node::class, 'parent', [
    'parent_id' => 0,
]);
