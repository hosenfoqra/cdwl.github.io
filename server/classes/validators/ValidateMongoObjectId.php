<?php

class ValidateMongoObjectId
{
    public string $value;
    public array $errors = [];
    public bool $state = false;

    public function __construct(string $_value)
    {
        $this->value = $_value;
    }

    public function validate()
    {
        if (!ValidateMongoObjectId::checkRegex($this->value)) {
            $this->errors[] = 'Invalid ObjectId';
            $this->state = false;
        }
        else {
            $this->state = true;
        }

        return $this;
    }

    public static function checkRegex(string $objectId): bool
    {
        // Use a regular expression to validate the ObjectId format
        return preg_match('/^[0-9a-fA-F]{24}$/', $objectId) === 1;
    }
}
