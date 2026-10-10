# 11. Convertir temperaturas de un pronóstico
temperaturas = [18, 22, 25, 19, 30]

temperaturas_fahrenheit = [(temp * 9/5) + 32 for temp in temperaturas]
print("Temperaturas en Celsius:", temperaturas)
print("Temperaturas en Fahrenheit:", temperaturas_fahrenheit)
