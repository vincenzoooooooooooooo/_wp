def most_common(nums):
    count = {}
    
    
    for num in nums:
        count[num] = count.get(num, 0) + 1

    
    max_num = None
    max_count = 0
    for num, c in count.items():
        if c > max_count:
            max_count = c
            max_num = num

    return max_num
