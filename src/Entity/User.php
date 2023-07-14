<?php

namespace App\Entity;

use App\Entity\Email;

class User
{
    private string $name;
    private array $emails;

    public function __construct()
    {
        $this->emails = [];
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getEmails(): array
    {
        return $this->emails;
    }

    public function addEmails(Email $email): void
    {
        array_push($this->emails, $email);
    }
}
