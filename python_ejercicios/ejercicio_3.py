# ========================================================
# Ejemplo 3: Evaluación de notas y asignación de medallas
# Reglas:
# - Nota > 4.5 -> Medalla de Oro
# - Nota > 4.0 y <= 4.5 -> Medalla de Plata
# - Nota >= 3.8 y <= 4.0 -> Medalla de Bronce
# - Nota < 3.8 -> Sin medalla
# ========================================================

def evaluar_medalla(nota):
    if nota > 4.5:
        return "Medalla de Oro"
    elif nota > 4.0:
        return "Medalla de Plata"
    elif nota >= 3.8:
        return "Medalla de Bronce"
    else:
        return "Sin medalla"

# Ejemplos de prueba
if __name__ == "__main__":
    notas_estudiantes = [4.8, 4.2, 3.9, 3.5, 4.6, 4.0]
    
    for nota in notas_estudiantes:
        resultado = evaluar_medalla(nota)
        print(f"Nota: {nota} -> {resultado}")
