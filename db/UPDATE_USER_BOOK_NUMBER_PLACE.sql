UPDATE book_user_table
SET starting_num = $1
WHERE user_id = $2;