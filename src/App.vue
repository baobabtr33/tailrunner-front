<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/">Home</router-link> |
            </li>
            <li class="nav-item">
                <a href="https://jh-kim-l.notion.site/Steve-50e47fe27e074f318602fdf553a35539">About</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  <router-view />
</template>