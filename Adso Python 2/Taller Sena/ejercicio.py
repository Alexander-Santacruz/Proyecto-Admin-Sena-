# 1. Calculadora de propina
def calcular_propina(cuenta, porcentaje=10):
    return cuenta * (porcentaje / 100)

print("Propina (10% de 50000):", calcular_propina(50000))
print("Propina (15% de 100000):", calcular_propina(100000, 15))


# 2. Validador de contraseña
def es_valida(contrasena):
    return len(contrasena) >= 8

print("Contraseña '12345':", es_valida("12345"))
print("Contraseña 'password123':", es_valida("password123"))


# 3. Conversor de unidades
def km_a_millas(km):
    return km * 0.621

print("10 km en millas:", km_a_millas(10))
print("42 km en millas:", km_a_millas(42))
