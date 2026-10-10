asistencias = [1, 1, 0, 1, 0, 0, 1]
faltas = asistencias.count(0)
print(f"Faltas: {faltas}")
if faltas > 2:
    print("Alerta: Faltó más de 2 veces")
