<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Limpiar para evitar duplicados si las tablas existen
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        if (Schema::hasTable('apprentices')) { DB::table('apprentices')->truncate(); }
        if (Schema::hasTable('instructors')) { DB::table('instructors')->truncate(); }
        if (Schema::hasTable('courses')) { DB::table('courses')->truncate(); }
        if (Schema::hasTable('areas')) { DB::table('areas')->truncate(); }
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // 1. Áreas (10 registros)
        if (Schema::hasTable('areas')) {
            DB::table('areas')->insert([
                ['id' => 1, 'name' => 'Análisis y Desarrollo de Software', 'description' => 'ADSO-01', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 2, 'name' => 'Redes y Seguridad Informática', 'description' => 'RED-02', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 3, 'name' => 'Multimedia y Producción de Contenidos', 'description' => 'MUL-03', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 4, 'name' => 'Gestión Empresarial y Talento Humano', 'description' => 'GES-04', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 5, 'name' => 'Contabilidad y Finanzas', 'description' => 'CON-05', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 6, 'name' => 'Mecatrónica y Automatización', 'description' => 'MEC-06', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 7, 'name' => 'Mantenimiento de Equipos de Cómputo', 'description' => 'MAN-07', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 8, 'name' => 'Logística y Cadena de Suministro', 'description' => 'LOG-08', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 9, 'name' => 'Gastronomía y Cocina Nacional', 'description' => 'GAS-09', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 10, 'name' => 'Energías Renovables', 'description' => 'ENE-10', 'created_at' => now(), 'updated_at' => now()],
            ]);
        }

        // 2. Cursos (10 registros)
        if (Schema::hasTable('courses')) {
            DB::table('courses')->insert([
                ['id' => 1, 'name' => 'Tecnólogo en Análisis y Desarrollo de Software - Ficha 1', 'code' => 'ADSO-2834101', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 2, 'name' => 'Tecnólogo en Análisis y Desarrollo de Software - Ficha 2', 'code' => 'ADSO-2834102', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 3, 'name' => 'Técnico en Instalación de Redes LAN y WAN', 'code' => 'RED-2911201', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 4, 'name' => 'Técnico en Animación y Producción 3D', 'code' => 'MUL-3022301', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 5, 'name' => 'Tecnólogo en Gestión Administrativa', 'code' => 'GES-3133401', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 6, 'name' => 'Tecnólogo en Contabilidad y Finanzas', 'code' => 'CON-3244501', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 7, 'name' => 'Técnico en Automatización Industrial', 'code' => 'MEC-3355601', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 8, 'name' => 'Técnico en Soporte de Hardware', 'code' => 'MAN-3466701', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 9, 'name' => 'Tecnólogo en Gestión Logística', 'code' => 'LOG-3577801', 'created_at' => now(), 'updated_at' => now()],
                ['id' => 10, 'name' => 'Técnico en Cocina y Bar', 'code' => 'GAS-3811101', 'created_at' => now(), 'updated_at' => now()],
            ]);
        }
    }
}
