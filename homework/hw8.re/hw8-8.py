def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):  # 只檢查到 √n 就夠了
        if n % i == 0:
            return False
    return True
  
