<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository extends Repository
{
    protected $model;

    /**
     * @param User $model
     */
    public function __construct(User $model)
    {
        $this->model = $model;
    }


}
