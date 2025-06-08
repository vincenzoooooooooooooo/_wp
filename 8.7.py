def dict_to_string(d):
    result = []
    for key, value in d.items():
        result.append(f"{key}={value}")
    return ", ".join(result)
