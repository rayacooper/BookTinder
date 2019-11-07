SELECT * FROM book_master_table
WHERE book_id >= $1 AND book_id <= $2;