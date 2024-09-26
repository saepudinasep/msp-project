<?php

namespace App\Http\Controllers;

use App\Models\Placement;
use Illuminate\Http\Request;

class PlacementController extends Controller
{
    public function index()
    {
        $query = Placement::query();

        $placements = $query->paginate(10);

        dd($placements);

        return inertia('Placement/Index', [
            "placements" => $placements
        ]);
    }
}
