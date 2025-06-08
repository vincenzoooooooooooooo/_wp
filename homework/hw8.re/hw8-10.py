def summary(data):
    for student in data:
        name = student.get("name", "未知")
        scores = student.get("scores", [])
        total = sum(scores)
        avg = total / len(scores) if scores else 0
        print(f"{name}: 總分 {total}，平均 {avg:.1f}")
      
