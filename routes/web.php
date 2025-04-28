<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/home', function () {
    return Inertia::render('Home');
});
Route::get('/about', function () {
    return Inertia::render('About');
});
Route::get('/service', function () {
    return Inertia::render('Service');
});
Route::get('/team', function () {
    return Inertia::render('Team');
});
Route::get('/project', function () {
    return Inertia::render('Project');
});

Route::get('/blog', function () {
    return Inertia::render('Blog');
});
Route::get('/contact', function () {
    return Inertia::render('Contact');
});