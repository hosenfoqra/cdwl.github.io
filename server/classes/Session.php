<?php

session_start();

class Session
{
    private string $sessionName = '';

    public function __construct() {
        global $CONSTANTS;

        // Set session prefix
        $this->sessionName = $CONSTANTS['APP_NAME'] . '_SESSION_';
    }

    public function setLogged(bool $_isLogged): void
    {
        $_SESSION[$this->sessionName . 'IS_LOGGED'] = $_isLogged;
    }

    public function isLogged(): bool
    {
        return isset($_SESSION[$this->sessionName . 'IS_LOGGED']) && $_SESSION[$this->sessionName . 'IS_LOGGED'] === true;
    }

    public function destroy(): void
    {
        // Destroy the session
        session_destroy();
    }
}
