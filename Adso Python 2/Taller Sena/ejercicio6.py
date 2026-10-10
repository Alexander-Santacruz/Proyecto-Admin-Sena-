# 6. Contador de inasistencias
asistencias = [1, 1, 0, 1, 0, 0, 1]
inasistencias = asistencias.count(0)
print(f"Total de inasistencias: {inasistencias}")
if inasistencias > 2:
    print("¡Alerta! El aprendiz faltó más de 2 veces.")
else:
    print("Inasistencias dentro del límite permitible.")
