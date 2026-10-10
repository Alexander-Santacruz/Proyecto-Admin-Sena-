<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AreaController;
use App\Http\Controllers\TrainingCenterController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ApprenticeController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ComputerController;

// Páginas Web Principales (Blade)
Route::get('/', function () {
    return view('home');
});

Route::get('/publicaciones', function () {
    return view('publicacion');
});

// Vistas Blade completas para Aprendices (index, create, edit, show, store, update, destroy)
Route::resource('apprentices', ApprenticeController::class);

// Panel de React SPA (Dashboard)
Route::get('/dashboard/{any?}', function () {
    return view('dashboard');
})->where('any', '.*');

// Información General / Auth
Route::get('/adminsena', function () {
    return response()->json([
        'status' => 'success',
        'message' => 'API de AdminSena funcionando correctamente en Laravel 🚀',
        'autor' => 'David Alexander Chango Santacruz'
    ]);
});

Route::post('/register', [App\Http\Controllers\AuthController::class, 'register']);
Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']);

// API Endpoints para la SPA de React (prefijo /api o directas según use el frontend)
Route::prefix('api')->group(function () {
    Route::get('/adminsena', function () {
        return response()->json([
            'status' => 'success',
            'message' => 'API de AdminSena funcionando correctamente en Laravel 🚀'
        ]);
    });

    Route::get('/areas', [AreaController::class, 'index']);
    Route::post('/areas', [AreaController::class, 'index']); // fallback or store
    Route::post('/areas', [AreaController::class, 'store']);
    Route::put('/areas/{id}', [AreaController::class, 'update']);
    Route::delete('/areas/{id}', [AreaController::class, 'destroy']);

    Route::get('/training-centers', [TrainingCenterController::class, 'index']);
    Route::post('/training-centers', [TrainingCenterController::class, 'store']);
    Route::put('/training-centers/{id}', [TrainingCenterController::class, 'update']);
    Route::delete('/training-centers/{id}', [TrainingCenterController::class, 'destroy']);

    Route::get('/courses', [CourseController::class, 'index']);
    Route::post('/courses', [CourseController::class, 'store']);
    Route::put('/courses/{id}', [CourseController::class, 'update']);
    Route::delete('/courses/{id}', [CourseController::class, 'destroy']);

    Route::get('/apprentices', [ApprenticeController::class, 'index']);
    Route::post('/apprentices', [ApprenticeController::class, 'store']);
    Route::put('/apprentices/{id}', [ApprenticeController::class, 'update']);
    Route::delete('/apprentices/{id}', [ApprenticeController::class, 'destroy']);

    Route::get('/instructors', [InstructorController::class, 'index']);
    Route::post('/instructors', [InstructorController::class, 'store']);
    Route::put('/instructors/{id}', [InstructorController::class, 'update']);
    Route::delete('/instructors/{id}', [InstructorController::class, 'destroy']);

    Route::get('/computers', [ComputerController::class, 'index']);
    Route::post('/computers', [ComputerController::class, 'store']);
    Route::put('/computers/{id}', [ComputerController::class, 'update']);
    Route::delete('/computers/{id}', [ComputerController::class, 'destroy']);

    Route::get('/clients', [ApprenticeController::class, 'index']);
    Route::post('/clients', [ApprenticeController::class, 'store']);
    Route::put('/clients/{id}', [ApprenticeController::class, 'update']);
    Route::delete('/clients/{id}', [ApprenticeController::class, 'destroy']);
});

// Rutas de compatibilidad directa (por si el frontend realiza peticiones sin /api/)
Route::get('/areas', [AreaController::class, 'index']);
Route::post('/areas', [AreaController::class, 'store']);
Route::put('/areas/{id}', [AreaController::class, 'update']);
Route::delete('/areas/{id}', [AreaController::class, 'destroy']);

Route::get('/training-centers', [TrainingCenterController::class, 'index']);
Route::post('/training-centers', [TrainingCenterController::class, 'store']);
Route::put('/training-centers/{id}', [TrainingCenterController::class, 'update']);
Route::delete('/training-centers/{id}', [TrainingCenterController::class, 'destroy']);

Route::get('/courses', [CourseController::class, 'index']);
Route::post('/courses', [CourseController::class, 'store']);
Route::put('/courses/{id}', [CourseController::class, 'update']);
Route::delete('/courses/{id}', [CourseController::class, 'destroy']);

Route::get('/instructors', [InstructorController::class, 'index']);
Route::post('/instructors', [InstructorController::class, 'store']);
Route::put('/instructors/{id}', [InstructorController::class, 'update']);
Route::delete('/instructors/{id}', [InstructorController::class, 'destroy']);

Route::get('/computers', [ComputerController::class, 'index']);
Route::post('/computers', [ComputerController::class, 'store']);
Route::put('/computers/{id}', [ComputerController::class, 'update']);
Route::delete('/computers/{id}', [ComputerController::class, 'destroy']);

Route::get('/clients', [ApprenticeController::class, 'index']);
Route::post('/clients', [ApprenticeController::class, 'store']);
Route::put('/clients/{id}', [ApprenticeController::class, 'update']);
Route::delete('/clients/{id}', [ApprenticeController::class, 'destroy']);
