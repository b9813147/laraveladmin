<?php

namespace App\Services;

use App\Repositories\Repository;

abstract class Service
{

    /**
     * @var Repository
     */
    protected $repository;

    /**
     * @param array $where
     * @param array $columns
     * @return mixed
     */
    public function findWhere(array $where = [], array $columns = ['*'])
    {
        return $this->repository->findWhere($where, $columns);
    }

    /**
     * @param string $column
     * @param array $values
     * @param array|string[] $columns
     * @return mixed
     */
    public function findWhereIn(string $column, array $values = [], array $columns = ['*'])
    {
        return $this->repository->findWhereIn($column, $values, $columns);
    }

    /**
     * @param array $where
     * @param array $columns
     * @return mixed
     */
    public function firstWhere(array $where = [], array $columns = ['*'])
    {
        return $this->repository->firstWhere($where, $columns);
    }

    /**
     * @param array $where
     * @return mixed
     */
    public function deleteWhere(array $where = [])
    {
        return $this->repository->deleteWhere($where);
    }

    /**
     * @param array $where
     * @param array $attributes
     * @return mixed
     */
    public function updateWhere(array $where, array $attributes)
    {
        return $this->repository->updateWhere($where, $attributes);
    }

    /**
     * @param array $attributes
     * @param array $values
     * @return mixed
     */
    public function updateOrCreate(array $attributes, array $values = [])
    {
        return $this->repository->updateOrCreate($attributes, $values);
    }

    /**
     * @param array $attributes
     * @param array $values
     * @return mixed
     */
    public function updateOrInsert(array $attributes, array $values = [])
    {
        return $this->repository->updateOrInsert($attributes, $values);
    }

    /**
     * @param int $id
     * @param array $columns
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    public function find($id, array $columns = ['*'])
    {
        return $this->repository->find($id, $columns);
    }

    /**
     * @param array $where
     * @return bool
     */
    public function exists(array $where = []): bool
    {
        return $this->repository->exists($where);
    }

    /**
     * 調整排序
     * @param string $method
     * @param array $where
     * @param string $column
     * @param int $order
     * @param int $new_order
     * @return bool
     */
    public function adjustSort(string $method, array $where, string $column, int $order, int $new_order): bool
    {
        return $this->repository->adjustSort($method, $where, $column, $order, $new_order);
    }

    public function all()
    {
        return $this->repository->all();
    }

    /**
     * @param $attributes
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create($attributes)
    {
        return $this->repository->create($attributes);
    }

    /**
     * @return mixed
     */
    public function first()
    {
        return $this->repository->first();
    }

    /**
     * @param $column
     * @param $value
     * @return mixed
     */
    public function firstBy($column, $value)
    {
        return $this->repository->firstBy($column, $value);
    }


    /**
     * @param $column
     * @param $value
     * @return mixed
     */
    public function findBy($column, $value)
    {
        return $this->repository->findBy($column, $value);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function get()
    {
        return $this->repository->get();
    }

    /**
     * @param $column
     * @param $value
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getBy($column, $value)
    {
        return $this->repository->getBy($column, $value);
    }

    /**
     * @param $id
     * @param $attributes
     * @return bool|int
     */
    public function update($id, $attributes)
    {
        return $this->repository->update($id, $attributes);
    }

    /**
     * @param $column
     * @param $value
     * @param $attributes
     * @return bool
     */
    public function updateBy($column, $value, $attributes)
    {
        return $this->repository->updateBy($column, $value, $attributes);
    }

    /**
     * @param $id
     * @return bool|int|null
     */
    public function destroy($id)
    {
        return $this->repository->destroy($id);
    }

    /**
     * @param $column
     * @param $value
     * @return bool|null
     */
    public function destroyBy($column, $value)
    {
        return $this->repository->destroyBy($column, $value);
    }

    /**
     * @param string $column
     * @param $value
     * @param int $page
     * @return mixed
     * @internal param $id
     */
    public function paginateBy($column, $value, $page = 12)
    {
        return $this->repository->paginateBy($column, $value, $page);
    }

    /**
     * @param int $page
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginate($page = 12)
    {
        return $this->repository->paginate($page);
    }
}
