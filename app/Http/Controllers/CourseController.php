<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        return response()->json($courses);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'code' => 'required|max:50|unique:courses',
        ]);
        
        $course = Course::create($request->all());
        return response()->json($course);
    }

    public function update(Request $request, string $id)
    {
        $course = Course::find($id);
        if (!$course) {
            return response()->json(['message' => 'Curso no encontrado'], 404);
        }

        $request->validate([
            'name' => 'required|max:255',
            'code' => 'required|max:50|unique:courses,code,' . $id,
        ]);

        $course->update($request->all());
        return response()->json($course);
    }
}
