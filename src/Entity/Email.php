<?php

namespace App\Entity;

class Email
{
    private string $address;
    private array $purposes;

    public function __construct()
    {
        $this->purposes = [];
    }

    public function getAddress(): string
    {
        return $this->address;
    }

    public function setAddress(string $address): void
    {
        $this->address = $address;
    }

    public function getPurpose(): array
    {
        return $this->purposes;
    }

    public function addPurpose(string $purpose): void
    {
        array_push($this->purposes, $purpose);
    }

    public function removePurpose(int $index): void
    {
        unset($this->purposes[$index]);
    }
}
