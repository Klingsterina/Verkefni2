CREATE TABLE IF NOT EXISTS Category (
    id SERIAL PRIMARY KEY,
    category TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Question (
    id INTEGER PRIMARY KEY,
    question TEXT NOT NULL,
    category_id INTEGER NOT NULL,
    FOREIGN KEY (category_id) REFERENCES Category(id)
);

CREATE TABLE IF NOT EXISTS Answer (
    id SERIAL PRIMARY KEY,
    answer TEXT NOT NULL,
    question_id INTEGER NOT NULL,
    is_correct BOOLEAN NOT NULL,
    FOREIGN KEY (question_id) REFERENCES Question(id)
);

