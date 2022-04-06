<?php

namespace App\Services;

use App\Repositories\UserRepository;

class UserService extends Service
{
    protected $repository;

    /**
     * @param UserRepository $repository
     */
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }
}
