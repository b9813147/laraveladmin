<?php

namespace App\Repositories;

abstract class Repository
{
    /**
     * @var \Eloquent|\DB
     */
    protected $model;

    /**
     * @param array $where
     * @param array $columns
     * @return mixed
     */
    public function findWhere(array $where = [], array $columns = ['*'])
    {
        return $this->model->where($where)->get($columns);
    }

    /**
     * @param string $column
     * @param array $values
     * @param array $columns
     * @return mixed
     */
    public function findWhereIn(string $column, array $values = [], array $columns = ['*'])
    {
        return $this->model->whereIn($column, $values)->get($columns);
    }

    /**
     * @param array $where
     * @param array $columns
     * @return mixed
     */
    public function firstWhere(array $where = [], array $columns = ['*'])
    {
        return $this->model->where($where)->first($columns);
    }

    /**
     * @param array $where
     * @return mixed
     */
    public function deleteWhere(array $where = [])
    {
        return $this->model->where($where)->delete();
    }

    /**
     * @param array $where
     * @param array $attributes
     * @return mixed
     */
    public function updateWhere(array $where, array $attributes)
    {
        return $this->model->where($where)->update($attributes);
    }

    /**
     * @param array $attributes
     * @param array $values
     * @return mixed
     */
    public function updateOrCreate(array $attributes, array $values = [])
    {
        return $this->model->updateOrCreate($attributes, $values);
    }

    /**
     * @param array $attributes
     * @param array $values
     * @return mixed
     */
    public function updateOrInsert(array $attributes, array $values = [])
    {
        return $this->model->updateOrInsert($attributes, $values);
    }

    /**
     * @param array $where
     * @return bool
     */
    public function exists(array $where = []): bool
    {
        return $this->model->where($where)->exists();
    }


    /**
     * adjust sort
     * @param string $method
     * @param array $where
     * @param string $column
     * @param int $order
     * @param int $new_order
     * @return bool
     */
    public function adjustSort(string $method, array $where, string $column, int $order, int $new_order): bool
    {
        $isSuccessful = true;
        try {
            switch ($method) {
                case 'create':
                    $this->model->where($where)->where($column, '>=', $new_order)->increment($column);
                    break;
                case 'update':
                    if ($order > $new_order) {
                        $this->model->where($where)->where($column, '>', 0)->whereBetween($column, [$new_order, $order])->increment($column);
                    }
                    if ($order < $new_order) {
                        $this->model->where($where)->where($column, '>', 0)->whereBetween($column, [$order, $new_order])->decrement($column);
                    }
                    break;
                case 'destroy':
                    $this->model->where($where)->where($column, '>', $order)->decrement($column);
                    break;
            }
        } catch (\Exception $exception) {
            $isSuccessful = false;
        }
        return $isSuccessful;
    }

    /**
     * @param array $columns
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function all($columns = ['*'])
    {
        return $this->model->all($columns);
    }

    /**
     * @param $attributes
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function create($attributes)
    {
        return $this->model->create($attributes);
    }

    /**
     * @param $id
     * @param array $attributes
     * @param array $options
     * @return bool
     */
    public function update($id, array $attributes, array $options = [])
    {
        $instance = $this->model->findOrFail($id);

        return $instance->update($attributes, $options);
    }

    /**
     * @param $column
     * @param $value
     * @param array $attributes
     * @param array $options
     * @return bool
     */
    public function updateBy($column, $value, array $attributes = [], array $options = [])
    {
        return $this->model->where($column, $value)->update($attributes, $options);
    }

    /**
     * @param array $columns
     * @return mixed
     */
    public function first($columns = ['*'])
    {
        return $this->model->first($columns);
    }

    /**
     * @param $column
     * @param $value
     * @param array $columns
     * @return mixed
     */
    public function firstBy($column, $value, $columns = ['*'])
    {
        return $this->model->where($column, $value)->first($columns);
    }

    /**
     * @param $id
     * @param array $columns
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    public function find($id, $columns = ['*'])
    {
        return $this->model->find($id, $columns);
    }

    /**
     * @param $column
     * @param $value
     * @param array $columns
     * @return mixed
     */
    public function findBy($column, $value, $columns = ['*'])
    {
        return $this->model->where($column, $value)->first($columns);
    }

    /**
     * @param array $columns
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function get($columns = ['*'])
    {
        return $this->model->get($columns);
    }

    /**
     * @param $column
     * @param $value
     * @param array $columns
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getBy($column, $value, $columns = ['*'])
    {
        return $this->model->where($column, $value)->get($columns);
    }

    /**
     * @param $ids
     * @return int
     * @internal param $id
     */
    public function destroy($ids)
    {
        return $this->model->destroy($ids);
    }

    /**
     * @param $column
     * @param $value
     * @return bool|null
     */
    public function destroyBy($column, $value)
    {
        return $this->model->where($column, $value)->delete();
    }

    /**
     * @param null $perPage
     * @param array $columns
     * @param string $pageName
     * @param int $page
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginate($perPage = null, $columns = ['*'], $pageName = 'page', $page = null)
    {
        return $this->model->paginate($perPage, $columns, $pageName, $page);
    }

    /**
     * @param $column
     * @param $value
     * @param null $perPage
     * @param array $columns
     * @param string $pageName
     * @param int $page
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginateBy($column, $value, $perPage = null, $columns = ['*'], $pageName = 'page', $page = null)
    {
        return $this->model->where($column, $value)->paginate($perPage, $columns, $pageName, $page);
    }
}
