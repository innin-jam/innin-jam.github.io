Which of the following draws a snowflake?

```text choice1
a(0, 1)
a(120, 1)
a(240, 1)

pendown()

def a(dir, scale) {
    forward(1 * scale)
    a(dir - 30, scale * 0.5)
    a(dir, scale * 0.5)
    a(dir + 30, scale * 0.5)
}

penup()
```

```text choice2
a(0, 2)
a(120, 2)
a(240, 2)

pendown()

def a(dir, reps) {
    if reps == 0 {
        return
    }
    forward(1)
    a(dir - 30, reps - 1)
    a(dir, reps - 1)
    a(dir + 30, reps - 1)
}

penup()
```

```text choice3
a(0, 1)
a(120, 1)
a(240, 1)

pendown()

def a(dir, scale) {
    forward(scale)
    if scale <= 0.25 {
        return
    }
    a(dir - 30, scale * 0.5)
    a(dir, scale * 0.5)
    a(dir + 30, scale * 0.5)
}

penup()
```

```text choice4
a()

pendown()

def a() {
    direction = 0
    forward(1)
    a()
    forward(-1)
    direction = 120
    forward(1)
    a()
    forward(-1)
    direction = 240
    forward(1)
    a()
    forward(-1)
}

penup()
```
