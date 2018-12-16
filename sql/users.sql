CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(180) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `create_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO users (`username`, `first_name`, `last_name`, `email`, `enabled`, `password`)
VALUES ('admin', 'first', 'last', 'admin@admin.com', 1, 'eae4dab389612ebd68ed6f4b872ae41d');