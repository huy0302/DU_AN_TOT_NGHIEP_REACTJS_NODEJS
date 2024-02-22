-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 08, 2023 lúc 05:31 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `vitagreen`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `status` int(11) DEFAULT 0,
  `hot` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `avatar`, `slug`, `status`, `hot`, `created_at`, `updated_at`) VALUES
(1, 'Trái cây', 'Trái cây', 'image-98b94d67-c2f1-4261-9963-def91a17eec3.png', 'trai-cay', 1, -1, '2023-11-30 22:58:09', '2023-12-03 23:02:35'),
(2, 'Rau củ tươi', 'Rau củ tươi', 'image-1cfe6a99-4763-470e-af3d-6f0eb7432679.png', 'rau-cu-tuoi', 1, -1, '2023-11-30 22:58:29', '2023-12-03 23:02:50'),
(3, 'Đồ uống', 'Đồ uống', 'image-ee07a1ea-4784-494c-8f7e-c81eeecc921b.png', 'do-uong', 1, -1, '2023-11-30 22:58:42', '2023-12-03 23:06:25');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `name` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `contacts`
--

INSERT INTO `contacts` (`id`, `title`, `name`, `email`, `content`, `created_at`, `updated_at`) VALUES
(1, 'Cần tư vấn', 'Phú phan', 'phupt.humg.94@gmail.com', 'Nội dung', '2023-12-03 04:27:36', '2023-12-03 04:27:36'),
(2, '123', 'Huy', 'huynguyen03022003@gmail.com', '213', '2023-12-05 06:43:48', '2023-12-05 06:43:48');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `total_discount` float DEFAULT 0,
  `total_price` float DEFAULT 0,
  `note` varchar(255) DEFAULT NULL,
  `order_type` int(11) DEFAULT 0,
  `status` int(11) DEFAULT 0,
  `payment_type` int(11) DEFAULT 0,
  `receiver_name` varchar(255) NOT NULL,
  `receiver_email` varchar(255) NOT NULL,
  `receiver_phone` varchar(255) NOT NULL,
  `receiver_address` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT 0,
  `shipping_status` int(11) DEFAULT 0,
  `payment_status` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `total_discount`, `total_price`, `note`, `order_type`, `status`, `payment_type`, `receiver_name`, `receiver_email`, `receiver_phone`, `receiver_address`, `type`, `shipping_status`, `payment_status`, `created_at`, `updated_at`) VALUES
(1, 2, 0, 71000, '', 0, 3, 0, 'Hạ Linh', 'halinh0707@gmail.com', '0909666777', 'Hà Nội', 0, 3, 1, '2023-12-02 03:08:49', '2023-12-06 11:07:28'),
(2, 2, 0, 71000, NULL, 0, 1, 0, 'Hạ Linh', 'halinh0707@gmail.com', '0909666777', 'Hà Nội', 0, 1, 0, '2023-12-02 03:24:00', '2023-12-02 03:24:00'),
(3, 2, 0, 35000, 'Giao nhanh nhé', 0, 1, 0, 'Hạ Linh 0707', 'halinh0707@gmail.com', '0909666777', 'Hà Nội', 0, 1, 0, '2023-12-02 17:05:05', '2023-12-02 17:05:05'),
(4, 2, 0, 35000, NULL, 0, 1, 0, 'Hạ Linh 0707', 'halinh0707@gmail.com', '0909666777', 'OK', 0, 1, 0, '2023-12-02 17:13:22', '2023-12-02 17:13:22'),
(5, 2, 0, 35000, NULL, 0, 1, 0, 'TrungPhuNA', 'doantotnghiep@gmail.com', '0986420994', 'Ha Nội', 0, 1, 0, '2023-12-02 17:14:18', '2023-12-02 17:14:18'),
(6, 2, 0, 199000, NULL, 0, 1, 0, 'Hạ Linh 0707', 'halinh0707@gmail.com', '0909666777', 'Hà Nội', 0, 1, 0, '2023-12-02 17:18:10', '2023-12-02 17:18:10'),
(7, 2, 0, 71000, NULL, 0, 1, 0, 'Hạ Linh 0707', 'halinh0707@gmail.com', '0909666777', 'Ha NOi', 0, 1, 0, '2023-12-03 00:54:50', '2023-12-03 00:54:50'),
(8, 2, 0, 35000, NULL, 0, 1, 0, 'Hạ Linh 0707', 'halinh0707@gmail.com', '0909666777', 'Ha Noi', 0, 1, 0, '2023-12-03 06:56:37', '2023-12-03 06:56:37'),
(9, 2, 0, 199000, NULL, 0, 1, 0, 'TrungPhuNA', 'doantotnghiep@gmail.com', '0986420994', 'Ha Nội', 0, 1, 0, '2023-12-03 12:58:41', '2023-12-03 12:58:41'),
(10, 2, 0, 35000, NULL, 0, 1, 0, 'TrungPhuNA', 'doantotnghiep@gmail.com', '0986420994', 'Ha Nội', 0, 1, 0, '2023-12-03 12:58:57', '2023-12-03 12:58:57'),
(11, 2, 0, 35000, NULL, 0, 1, 0, 'TrungPhuNA', 'doantotnghiep@gmail.com', '0986420994', 'Ha Nội', 0, 1, 0, '2023-12-03 13:00:12', '2023-12-03 13:00:12'),
(12, 2, 0, 199000, NULL, 0, 1, 0, 'AT test', 'attest@gmai.com', '0909111222', 'hà Nội', 0, 1, 0, '2023-12-03 13:00:35', '2023-12-03 13:00:35'),
(13, 2, 0, 96000, 'Giao nhanh', 0, 1, 0, 'Hạ Linh 0707', 'halinh0707@gmail.com', '0909666777', 'Hà Nội', 0, 1, 0, '2023-12-03 14:58:36', '2023-12-03 14:58:36'),
(14, 2, 0, 35000, 'Giao nhanh', 0, 1, 0, 'AT test', 'attest@gmai.com', '0909111222', 'hà Nội', 0, 1, 0, '2023-12-03 14:59:31', '2023-12-06 05:03:23'),
(15, 4, 0, 71000, '222222', 0, 4, 0, 'vinh', 'vinh@gmail.com', '0123456789', 'HCM', 0, 1, 0, '2023-12-03 19:16:29', '2023-12-06 08:34:34'),
(16, 4, 4200, 108800, 'kkk', 0, 1, 0, 'vinh', 'vinh@gmail.com', '0123456789', 'vinh@gmail.com', 0, 1, 0, '2023-12-04 01:51:39', '2023-12-04 01:51:39'),
(17, 4, 0, 71000, 'nbhhjk', 0, 1, 0, 'vinh', 'vinh@gmail.com', '04123456789', 'HCM', 0, 1, 0, '2023-12-04 01:56:34', '2023-12-04 01:56:34'),
(18, 4, 0, 71000, '123122', 0, 1, 0, 'vinh', 'vinh@gmail.com', '04123456789', 'hcm', 0, 1, 0, '2023-12-04 02:02:06', '2023-12-04 02:02:06'),
(19, 4, 0, 71000, 'sssss', 0, 1, 0, 'vinh', 'vinh@gmail.com', '04123456789', 'hcm@gmail.com', 0, 1, 0, '2023-12-04 02:02:44', '2023-12-06 05:09:03'),
(20, 7, 0, 71000, '21312', 0, 1, 0, 'Huy', 'nguyenduchuy03022003@gmail.com', '0865405630', '122 quận 4', 0, 1, 0, '2023-12-05 06:53:03', '2023-12-05 06:53:03'),
(21, 7, 0, 35000, '234', 0, 1, 0, 'Huy', 'nguyenduchuy03022003@gmail.com', '0865405630', '324', 0, 1, 0, '2023-12-05 06:55:40', '2023-12-05 06:55:40'),
(22, 8, 6900, 97100, '213213', 0, 1, 0, 'Huyền', 'lethithuhuyen4823@gmail.com', '097845613', '122 quận 4', 0, 1, 0, '2023-12-06 06:19:32', '2023-12-06 06:19:32'),
(23, 8, 2090, 27810, NULL, 0, 1, 0, 'Huyền', 'lethithuhuyen4823@gmail.com', '097845613', '33213123', 0, 1, 0, '2023-12-06 06:20:21', '2023-12-06 06:20:21'),
(24, 7, 0, 71000, NULL, 0, 1, 0, 'Huy', 'nguyenduchuy03022003@gmail.com', '0865405630', '213', 0, 1, 0, '2023-12-06 14:10:28', '2023-12-06 14:10:28'),
(25, 7, 3500, 31500, '212', 0, 1, 0, 'Huy', 'nguyenduchuy03022003@gmail.com', '0865405630', '12222', 0, 1, 0, '2023-12-06 14:13:09', '2023-12-06 14:13:09'),
(26, 7, 0, 106000, NULL, 0, 1, 0, 'Huy', 'nguyenduchuy03022003@gmail.com', '0865405630', 'QW21321', 0, 1, 0, '2023-12-06 14:13:58', '2023-12-06 14:13:58'),
(27, 7, 6900, 97100, NULL, 0, 1, 0, 'Huy', 'nguyenduchuy03022003@gmail.com', '0865405630', '321321', 0, 1, 0, '2023-12-06 14:17:17', '2023-12-06 14:17:17'),
(28, 7, 6900, 97100, NULL, 0, 1, 0, 'Huy', 'nguyenduchuy03022003@gmail.com', '0865405630', '324', 0, 1, 0, '2023-12-06 14:17:52', '2023-12-06 14:17:52'),
(29, 7, 6900, 97100, NULL, 0, 1, 0, 'Huy', 'nguyenduchuy03022003@gmail.com', '0865405630', '1443', 0, 1, 0, '2023-12-06 14:26:22', '2023-12-06 14:26:22'),
(30, 7, 6900, 97100, NULL, 0, 1, 0, 'Huy', 'nguyenduchuy03022003@gmail.com', '0865405630', '213', 0, 1, 0, '2023-12-06 14:29:27', '2023-12-06 14:29:27'),
(31, 7, 6900, 97100, NULL, 0, 1, 0, 'Huy', 'nguyenduchuy03022003@gmail.com', '0865405630', '13', 0, 1, 0, '2023-12-06 14:33:15', '2023-12-06 14:33:15'),
(32, 7, 6900, 62100, '213', 0, 1, 0, 'huy', 'huynguyen03@gmail.com', '0865405630', '123', 0, 1, 0, '2023-12-07 01:25:43', '2023-12-07 01:25:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permissions`
--

CREATE TABLE `permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `guard_name` varchar(255) DEFAULT NULL,
  `group_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) NOT NULL,
  `price` float DEFAULT 0,
  `sale` int(11) DEFAULT 0,
  `number` int(11) DEFAULT 0,
  `category_id` int(11) DEFAULT 0,
  `user_id` int(11) DEFAULT 0,
  `status` int(11) DEFAULT 0,
  `content` text DEFAULT NULL,
  `total_reviews` int(11) DEFAULT 0,
  `total_stars` int(11) DEFAULT 0,
  `options` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `hot` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `description`, `avatar`, `price`, `sale`, `number`, `category_id`, `user_id`, `status`, `content`, `total_reviews`, `total_stars`, `options`, `hot`, `created_at`, `updated_at`) VALUES
(1, 'Bí ngòi xanh - 300gr', 'bi-ngoi-xanh-300gr', 'Bí ngòi là trái cây thuộc loại họ nhà bầu bí, thân tròn, dài, bên ngoài vỏ bí có màu xanh bắt mắt. Bí ngòi là một loại rau củ sạch Đà Lạt chứa hàm lượng dinh dưỡng cao nhưng lại ít calo. Bí Ngòi Xanh có thể được dùng để ăn sống hoặc chế biến thành nhiều m', 'image-01cf927e-593e-4fbe-a613-882cab28a6b0.png', 13000, 0, 100, 2, 0, 1, 'Bí ngòi là trái cây thuộc loại họ nhà bầu bí, thân tròn, dài, bên ngoài vỏ bí có màu xanh bắt mắt. Bí ngòi là một loại rau củ sạch Đà Lạt chứa hàm lượng dinh dưỡng cao nhưng lại ít calo. Bí Ngòi Xanh có thể được dùng để ăn sống hoặc chế biến thành nhiều món khác nhau như canh bí ngòi nấu tôm, cá kho bí ngòi, bí ngòi xào nấm hoặc bí ngòi hấp, bí ngòi nướng… là những món đơn giản hơn. Ngoài ra, loại bí này cũng được rất nhiều bà mẹ đưa vào khẩu phần ăn dặm cho các bé bởi vì các dưỡng chất thiết yếu giúp phòng ngừa táo bón hiệu quả của nó.\nTrọng lượng thực tế có thể chênh lệch 10%.', 0, 0, '[]', -1, '2023-11-30 23:17:24', '2023-12-08 04:24:32'),
(2, 'Chuối cau - 1kg', 'chuoi-cau-1kg', '* Xuất xứ: Bến Tre\n\n* Quy cách: kg\n\n- Chuối cau là giống chuổi có quả nhỏ, ngắn, khi chín có màu vàng, ăn có vị ngọt thanh \n\n- Chuối cau là loại trái cây giàu chất dinh dưỡng, chứa nhiều chất xơ, vitamin, khoáng chất và tinh bột nhưng lại có lượng calo kh', 'image-f9b8c332-d786-41e9-951c-d5f2e1b587ff.jpg', 24000, 0, 1000, 1, 0, 1, '* Xuất xứ: Bến Tre\n\n* Quy cách: kg\n\n- Chuối cau là giống chuổi có quả nhỏ, ngắn, khi chín có màu vàng, ăn có vị ngọt thanh \n\n- Chuối cau là loại trái cây giàu chất dinh dưỡng, chứa nhiều chất xơ, vitamin, khoáng chất và tinh bột nhưng lại có lượng calo khá thấp. Vì vậy nên chuối cau có nhiều tác dụng tốt đối với sức khỏe như: Làm giảm nguy cơ mắc bệnh ung thư, bệnh hen xuyễn và tốt cho tim mạch, hỗ trợ giảm cân và cải thiện bệnh tiểu đường đáng kể', 6, 24, '[]', 1, '2023-11-30 23:18:40', '2023-12-08 03:17:43'),
(3, 'Dưa hấu không hạt - Trái 3.5Kg', 'dua-hau-khong-hat-trai-35kg', 'Dưa hấu không hạt - Trái 3.5kg\nQuả dưa tròn, da xanh nhạt có gân xanh đậm, vỏ mỏng, nhiều nước\n\nDưa hấu không hạt có ruột dưa đỏ, đẹp, không hạt, và vị ngọt đậm đà. Có mùi thơm đặc trưng, và dễ bảo quản.\n\nTrọng lượng trung bình mỗi quả từ 3–5 kg\n\nHiện nay', 'image-31d553a7-bfbb-489d-8b45-c574cd2e8277.jpg', 75000, 0, 100, 1, 0, 1, 'Dưa hấu không hạt - Trái 3.5kg\nQuả dưa tròn, da xanh nhạt có gân xanh đậm, vỏ mỏng, nhiều nước\n\nDưa hấu không hạt có ruột dưa đỏ, đẹp, không hạt, và vị ngọt đậm đà. Có mùi thơm đặc trưng, và dễ bảo quản.\n\nTrọng lượng trung bình mỗi quả từ 3–5 kg\n\nHiện nay với dưa hấu không hạt, các bà mẹ hoàn toàn yên tâm khi cho trẻ em ăn mà không sợ bị hóc hạt.\n\nQuả dưa tròn, da xanh nhạt có gân xanh đậm, vỏ mỏng, nhiều nước Dưa hấu không hạt có ruột dưa đỏ, đẹp, không hạt, và vị ngọt đậm đà. Có mùi thơm đặc trưng, và dễ bảo quản. Các bà mẹ hoàn toàn yên tâm khi cho trẻ em ăn mà không sợ bị hóc hạt. - Dưa hấu chưa nhiều vitamin và chứa chất chống oxy hóa chống lại ung thư vú ở phụ nữ và ung thư tuyến tiền liệt ở nam giới. Ngoài ra dưa hấu còn là trái cây hiếm hoi cung cấp chất citrulin - loạt chất có tác dụng làm lành vết thương,...', 4, 14, '[]', 1, '2023-11-30 23:26:50', '2023-12-08 03:19:22'),
(4, 'Cà chua Beef - 500gr', 'ca-chua-beef-500gr', 'Cà chua beef 500G, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nHình dáng: Cà chua Beef to hơn cà chua thường, cầm chắc tay, có màu đỏ cam hay đỏ đậm, có khía trên bề mặt quả. Cà chua beef đặc biệt mọng nước, cơm dày, hạt ít. Điển hình nhất là ', 'image-a2891827-de37-41c3-b177-d9d1f95901ab.jpg', 19000, 0, 1000, 1, 0, 1, 'Cà chua beef 500G, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nHình dáng: Cà chua Beef to hơn cà chua thường, cầm chắc tay, có màu đỏ cam hay đỏ đậm, có khía trên bề mặt quả. Cà chua beef đặc biệt mọng nước, cơm dày, hạt ít. Điển hình nhất là khi bổ quả ra sẽ thấy ít khoảng trống hơn.\nTrong cà chua có chứa rất nhiều nước (khoảng 90%). Bên cạnh đó có nhiều chất dinh dưỡng tốt cho cơ thể như: Carotene, Lycopene, vitamin B6, vitamin C, vitamin A, Kali, Folate, Thiamin, Magie, Niacin, Đồng và Phốt pho, chất xơ và Beta Carotene.', 2, 10, '[]', -1, '2023-11-30 23:27:50', '2023-12-08 03:35:38'),
(5, 'Đu đủ vàng - 1.5kg', 'du-du-vang-15kg', '* Xuất xứ: Long An\n\n* Quy cách: trái 1.5 - 2 kg\n\n* Shop sẽ cân trái thực tế để tính tiền ạ\n\n- Đu đủ là loại trái cây khá phổ biến ở nhiều vùng. Đu đủ xanh thường làm món nộm, hầm. Quả chín ăn tươi có rất nhiều chất dinh dưỡng cần thiết cho cơ thể. \n\n-Tron', 'image-ed5e6f2a-0b3b-4243-893c-0b15d9e65084.jpg', 175000, 0, 1000, 1, 0, 1, '* Xuất xứ: Long An\n\n* Quy cách: trái 1.5 - 2 kg\n\n* Shop sẽ cân trái thực tế để tính tiền ạ\n\n- Đu đủ là loại trái cây khá phổ biến ở nhiều vùng. Đu đủ xanh thường làm món nộm, hầm. Quả chín ăn tươi có rất nhiều chất dinh dưỡng cần thiết cho cơ thể. \n\n-Trong ngày Tết trên mâm ngũ quả không thể thiếu loại trái cây này. Người Miền Nam quan niệm rằng mãng cầu, sung, dừa, xoài, đu đủ mang lại sự sung túc, nó đủ cho cả năm. Đu đủ là loại quả nhiều dinh dưỡng rất tốt cho sức khỏe của chúng ta. \n\n- Đu đủ chín chứa 90% nước, 13% đường, không có tinh bột, nhiều caretenoid acid hữu cơ, các loại vitamin A, B, C, protein; 0,9% chất béo, xenlulo; 0,5% canxi và các chất đạm chống oxy hóa…', 0, 0, '[]', -1, '2023-12-03 19:43:23', '2023-12-08 03:25:48'),
(6, 'Rau má - 300gr', 'rau-ma-300gr', 'RAU MÁ TƯƠI \n- Quy cách: 300gr \n- Đặc điểm: rau má tươi dùng để nấu ăn, xay nước uống hoặc làm nhiều món thức uống ngon khác, như: rau má đậu, rau má sữa \n- Bảo quản: bảo quản ngăn mát tủ lạnh. \nLưu ý dùng trong ngày để đảm bảo độ tươi của rau', 'image-ac798c2e-1ed6-490e-94da-25f90a199c5a.webp', 12000, 0, 500, 2, 0, 1, 'RAU MÁ TƯƠI \n- Quy cách: 300gr \n- Đặc điểm: rau má tươi dùng để nấu ăn, xay nước uống hoặc làm nhiều món thức uống ngon khác, như: rau má đậu, rau má sữa \n- Bảo quản: bảo quản ngăn mát tủ lạnh. \nLưu ý dùng trong ngày để đảm bảo độ tươi của rau', 2, 8, '[]', -1, '2023-12-03 20:16:40', '2023-12-08 03:36:52'),
(7, 'Cà rốt - 1kg', 'ca-rot-1kg', 'Cà rốt 1KG, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nCà rốt chứa beta-carotene và alpha-carotene, hai loại carotenoid mà cơ thể chúng ta chuyển đổi thành vitamin A. Vitamin A đóng vai trò quan trọng trong việc cải thiện thị lực, tăng cường ', 'image-3278df8b-61ce-44da-b33e-e31289f96f39.jpg', 17500, 2, 100, 2, 0, 1, 'Cà rốt 1KG, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nCà rốt chứa beta-carotene và alpha-carotene, hai loại carotenoid mà cơ thể chúng ta chuyển đổi thành vitamin A. Vitamin A đóng vai trò quan trọng trong việc cải thiện thị lực, tăng cường ', 0, 0, '[]', -1, '2023-12-03 20:21:51', '2023-12-08 03:48:41'),
(8, 'Bắp cải tím - 1kg', 'bap-cai-tim-1kg', 'Bắp cải tím là một cây thuộc cải, có hình tròn, được tạo thành từ nhiều lớp lá cứng bên ngoài có màu tím, bên trong ruột màu trắng cuộn chặt với nhau, khi cầm lên nặng và chắc tay. Lá của bắp cải tím sẽ cứng và giòn hơn bắp cải xanh do thời gian trồng lâu', 'image-e419a708-7a2e-4906-9e5d-f2c88e859d26.webp', 24000, 10, 1000, 2, 0, 1, 'Bắp cải tím là một cây thuộc cải, có hình tròn, được tạo thành từ nhiều lớp lá cứng bên ngoài có màu tím, bên trong ruột màu trắng cuộn chặt với nhau, khi cầm lên nặng và chắc tay. Lá của bắp cải tím sẽ cứng và giòn hơn bắp cải xanh do thời gian trồng lâu hơn. Bắp cải tím chứa nhiều dưỡng chất tốt cho sức khỏe. Chính vì thế nó thường xuyên được sử dụng trong bữa ăn.  Trọng lượng thực tế có thể chênh lệch 10%.', 0, 0, '[]', -1, '2023-12-03 22:09:36', '2023-12-08 03:49:21'),
(9, ' Cà tím - 500gr', 'ca-tim-500gr', 'Cà tím 500G, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nCà tím chứa kali, vitamin C và B6, là những chất chống oxy hóa có thể thúc đẩy sức khỏe tim mạch và giúp giảm nguy cơ mắc bệnh tim. \nCà tím, ít calo và giàu chất xơ, là thực phẩm lý tưởn', 'image-e3272d3d-cee3-47ac-ac45-597db69155cf.png', 11000, 0, 1000, 2, 0, 1, 'Cà tím 500G, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nCà tím chứa kali, vitamin C và B6, là những chất chống oxy hóa có thể thúc đẩy sức khỏe tim mạch và giúp giảm nguy cơ mắc bệnh tim. \nCà tím, ít calo và giàu chất xơ, là thực phẩm lý tưởng cho những người béo, thừa cân và phù hợp với mọi chế độ ăn kiêng giảm cân. \nChất xơ không hòa tan không được tiêu hóa hoặc hấp thụ trong dạ dày, do đó bạn cảm thấy no lâu hơn và giảm cảm giác thèm ăn. Đồng thời, chúng còn kích thích quá trình tiêu hóa, thúc đẩy nhu động ruột, giúp tống nhanh chất thải ra ngoài cơ thể và chống táo bón. \nCứ 100 g cà tím sống cung cấp khoảng 16% lượng chất xơ khuyến nghị cho người Việt Nam mỗi ngày (18-20 g).', 0, 0, '[]', -1, '2023-12-03 22:21:56', '2023-12-08 03:58:11'),
(10, 'Bưởi da xanh - trái 1.5kg', 'buoi-da-xanh-trai-15kg', '* Xuất xứ : Bến Tre\n\n* Quy cách : 1,5 - 2 kg/trái\n\n* Shop cân từng trái, tính tiền theo khối lượng\n\n- Bưởi da xanh tép bưởi màu hồng đỏ, bó chặt và dễ tách khỏi vách múi.\n\n- Vị ngọt không chua, mùi thơm.\n\n- Bưởi da xanh có cuống, thích hợp để dùng trong m', 'image-0f405b95-efb3-42cb-b7e2-2011e96bc023.jpg', 35000, 10, 1000, 1, 0, 1, '* Xuất xứ : Bến Tre\n\n* Quy cách : 1,5 - 2 kg/trái\n\n* Shop cân từng trái, tính tiền theo khối lượng\n\n- Bưởi da xanh tép bưởi màu hồng đỏ, bó chặt và dễ tách khỏi vách múi.\n\n- Vị ngọt không chua, mùi thơm.\n\n- Bưởi da xanh có cuống, thích hợp để dùng trong mâm cúng gia tiên, ngày rằm, mồng một.\n\n- Bưởi da xanh có khả năng thanh nhiệt cũng như cung cấp đầy đủ vitamin C cho cơ thể. \n\n- Có khả năng phòng cảm cúm và ngăn ngừa lây nhiễm qua đường hô hấp, điều trị bệnh thận, điều tiết nội tiết tố cũng như tốt cho tim mạch. Ngoài ra còn bưởi da xanh còn giúp giảm nguy cơ mắc ung thư dạ dày', 0, 0, '[]', -1, '2023-12-03 22:42:02', '2023-12-08 03:54:16'),
(11, 'Bắp Nếp - 1 trái', 'bap-nep-1-trai', 'BẮP NẾP\n\n* Quy cách: 1 Trái\n* Xuất Xứ: Việt Nam\n- Bắp nếp có hình dáng thon dài hạt dẹp màu trắng sữa và vị ngọt tự nhiên.\n- Bắp nếp dồi dào tinh bột, protein và nhiều chất dinh dưỡng giúp cung cấp năng lượng và bồi bổ sức khỏe cho cơ thể\n* Bảo quản: Nơi ', 'image-d3443c12-cd5f-464a-bf26-698d7b54e2fe.jpg', 9900, 0, 200, 1, 0, 1, 'BẮP NẾP\n\n* Quy cách: 1 Trái\n* Xuất Xứ: Việt Nam\n- Bắp nếp có hình dáng thon dài hạt dẹp màu trắng sữa và vị ngọt tự nhiên.\n- Bắp nếp dồi dào tinh bột, protein và nhiều chất dinh dưỡng giúp cung cấp năng lượng và bồi bổ sức khỏe cho cơ thể\n* Bảo quản: Nơi thoáng mát hoặc nơi có nhiệt độ phòng bình thường', 0, 0, '[]', -1, '2023-12-03 22:45:04', '2023-12-08 03:57:25'),
(12, 'Dâu tây giống New Zealand - hộp 500gr', 'dau-tay-giong-new-zealand-hop-500gr', '* Xuất xứ: Dâu giống Newzeland, trồng tại Đà Lạt\n\n* Quy cách: hộp 500gr\n\n* Đặt hàng trước 1 ngày.\n\n- Dâu tây giống New Zealand là một trong những giống dâu tây cao cấp được trồng thủy canh tại Đà Lạt. Trái dâu tây Đà Lạt giống New Zealand có màu sắc đỏ bắ', 'image-30dc6fbf-2ee9-48e0-bebe-15c2bf6c026c.jpg', 20900, 10, 1000, 1, 0, 1, '* Xuất xứ: Dâu giống Newzeland, trồng tại Đà Lạt\n\n* Quy cách: hộp 500gr\n\n* Đặt hàng trước 1 ngày.\n\n- Dâu tây giống New Zealand là một trong những giống dâu tây cao cấp được trồng thủy canh tại Đà Lạt. Trái dâu tây Đà Lạt giống New Zealand có màu sắc đỏ bắt mắt, quả to, thịt giòn, ngọt và có vị thơm đặc trưng. \n\n- Dâu tây giống New Zealand là một thứ quả đặc biệt có lợi cho sức khỏe con người (chứa chất chống oxy hóa nhiều gấp 10 lần cà chua), dâu tây vị ngọt chua, mát có công dụng bổ phổi, điều hòa chức năng tiêu hóa, bồi bổ cơ thể, mát máu,....', 0, 0, '[]', -1, '2023-12-03 22:48:07', '2023-12-08 03:55:57'),
(13, 'Dưa Lưới Tròn - Trái 1.3Kg', 'dua-luoi-tron-trai-13kg', '* Xuất xứ : Bình Phước\n\n* Quy cách : 1kg (trái từ 1,2 - 2 kg)\n\n- Dưa lưới nhà kính được nuôi trồng kỹ lưỡng nên trái to tròn, có vò màu xanh nhạt, có lớp lưới bao phủ ở ngoài, ăn có mùi thơm, giòn nhẹ \n\n- Dưa lưới', 'image-ed88d3cf-f4e5-4df9-be2e-1faf3df4ab78.jpg', 54000, 10, 1000, 1, 0, 1, '* Xuất xứ : Bình Phước\n\n* Quy cách : 1kg (trái từ 1,2 - 2 kg)\n\n- Dưa lưới nhà kính được nuôi trồng kỹ lưỡng nên trái to tròn, có vò màu xanh nhạt, có lớp lưới bao phủ ở ngoài, ăn có mùi thơm, giòn nhẹ \n\n- Dưa lưới rất giàu folate và Vitamin nhóm B rất cần thiết cho sự phát triểnthai nhi và những bênh nhân thiếu máu, giúp ngăn ngừa lão hóa, tốt cho người tiểu đường, tim mạch, đồng thời giúp tăng cường hệ miễn dịch', 0, 0, '[]', 1, '2023-12-03 22:50:13', '2023-12-08 04:18:56'),
(14, ' Chôm chôm thường - 1kg', 'chom-chom-thuong-1kg', 'Quả chôm chôm rất giàu khoáng chất, vitamin và các hợp chất thực vật có lợi. Cụ thể:\nChất xơ: Phần thịt quả cung cấp khoảng 1,3-2 gam hàm lượng chất xơ trên 100 gam - tương tự với hàm lượng có trong táo, cam hoặc lê.\nVitamin C: Vitamin C có trong chôm chô', 'image-049461b0-3628-4263-b75f-8146e9f6bec3.jpg', 42000, 10, 500, 1, 0, 1, 'Quả chôm chôm rất giàu khoáng chất, vitamin và các hợp chất thực vật có lợi. Cụ thể:\nChất xơ: Phần thịt quả cung cấp khoảng 1,3-2 gam hàm lượng chất xơ trên 100 gam - tương tự với hàm lượng có trong táo, cam hoặc lê.\nVitamin C: Vitamin C có trong chôm chôm giúp cơ thể hấp thụ sắt từ thực phẩm dễ dàng hơn. Vitamin này cũng hoạt động như một chất chống oxy hóa, bảo vệ các tế bào cơ thể bạn khỏi nguy cơ hư hại. Ăn 5-6 quả chôm chôm sẽ đáp ứng 50% nhu cầu vitamin C hàng ngày của cơ thể.\nĐồng: Chôm chôm cũng chứa một lượng đồng đáng kể, giúp phát triển và duy trì sự tồn tại của các tế bào khác nhau, bao gồm cả xương, não và tim.\nCác khoáng chất khác: Chôm chôm cũng cung cấp một lượng nhỏ mangan, phốt pho, kali, magie, sắt và kẽm. Ăn 100 gam (hoặc khoảng 4 quả) sẽ đáp ứng 20% ​​nhu cầu đồng hàng ngày và 2-6% lượng khuyến nghị hàng ngày của các chất dinh dưỡng khác.\nVỏ và hạt chôm chôm mặc dù cũng chứa một số chất dinh dưỡng, chất chống oxy hóa và các hợp chất có lợi khác, tuy nhiên chúng cũng chứa một số hợp chất gây hại cho con người nên lời khuyên là tránh ăn hạt hoàn toàn để bảo đảm sức khỏe.', 0, 0, '[]', -1, '2023-12-03 22:51:11', '2023-12-08 03:56:30'),
(15, 'Chanh không hạt - 500gr', 'chanh-khong-hat-500gr', 'Chanh không hạt là cho trái quanh năm. Cây còn có sức kháng bệnh rất mạnh, nhất là không thấy bị nhiễm bệnh vàng lá gân xanh như các loại cây có múi khác  \n \nChanh không hạt có đặc điểm là nhiều nước hơn chanh ta, vì thế quả chanh thường được vắt lấy nước', 'image-50322d5d-1de7-4270-b513-3ad98701a169.jpg', 14500, 0, 1000, 1, 0, 1, 'Chanh không hạt là cho trái quanh năm. Cây còn có sức kháng bệnh rất mạnh, nhất là không thấy bị nhiễm bệnh vàng lá gân xanh như các loại cây có múi khác  \n \nChanh không hạt có đặc điểm là nhiều nước hơn chanh ta, vì thế quả chanh thường được vắt lấy nước làm nước cốt, làm nước chấm, thức uống có tính chất giảm khát, chữa bệnh. Quả chanh cắt đôi sát vào móng tay móng chân có tác dụng tẩy sạch bùn đất, làm sạch móng. Quả chanh được sắt lát móng tròn dùng để trang trí cho một số món thức uống.\n\nChanh không hạt dễ trồng, ít bị sâu bệnh lại cho trái quanh năm, thời gian từ trồng đến thu hoạch là 18 tháng. ', 0, 0, '[]', -1, '2023-12-03 22:52:38', '2023-12-08 03:55:33'),
(16, 'Chanh dây - 1kg', 'chanh-day-1kg', '* Xuất xứ: Đà Lạt\n\n* Quy cách : 8-11 trái/kg\n\n- Chanh dây vị chua ngọt và thơm.\n\n- Chanh dây hay còn gọi là chanh leo, là trái cây nhiệt đới trái nhỏ, tròn, có vỏ màu xanh ngả tím khi về chín, bên trong là những hạt chanh dây chưa nhiều nước, có độ chua, ', 'image-e2bd263b-ea00-4f40-85da-956aa6cbd878.jpg', 15900, 10, 1000, 1, 0, 1, '* Xuất xứ: Đà Lạt\n\n* Quy cách : 8-11 trái/kg\n\n- Chanh dây vị chua ngọt và thơm.\n\n- Chanh dây hay còn gọi là chanh leo, là trái cây nhiệt đới trái nhỏ, tròn, có vỏ màu xanh ngả tím khi về chín, bên trong là những hạt chanh dây chưa nhiều nước, có độ chua, giàu chất xơ, phủ hợp để pha nước, làm sinh tố hoặc chế biến những món tráng miệng giải khát \n\n- Chanh dây có nhiều công dụng tốt cho sức khỏe phải kể đến như: giúp ổn định đường huyết, có thể hỗ trợ cho điều trị bệnh nhân tiều đường, giúp ngăn ngừa ung thư, cải thiện hệ tiêu hóa và giúp làm đẹp da,... Ngoài ra chanh dây còn giúp giảm stress và ngủ ngon hơn. Hãy uống một ly nước ép chanh dây vào buổi tối để giúp ngủ ngon hơn nhé', 0, 0, '[]', -1, '2023-12-03 22:53:55', '2023-12-08 03:54:54'),
(17, 'Kiwi vàng Newzealand - 4 trái 600gr', 'kiwi-vang-newzealand-4-trai-600gr', 'Xuất xứ : Newzeland\n\n* Quy cách : 4 trái / 600g\n\n- Kiwi vàng có vỏ trơn nhẵn, màu đồng và ruột màu vàng đẹp mắt,với nhiều hạt đen tạo thành 1 vòng tròn xung quanh trục dọc của quả. \n\n- Kiwi vàng khi cứng trái có vị ngọt thanh, quả càng chín vị ngọt càng đ', 'image-603d97b7-6ee1-422d-8f81-2acdfafab1aa.jpg', 129000, 12, 100, 1, 0, 1, 'Xuất xứ : Newzeland\n\n* Quy cách : 4 trái / 600g\n\n- Kiwi vàng có vỏ trơn nhẵn, màu đồng và ruột màu vàng đẹp mắt,với nhiều hạt đen tạo thành 1 vòng tròn xung quanh trục dọc của quả. \n\n- Kiwi vàng khi cứng trái có vị ngọt thanh, quả càng chín vị ngọt càng đậm đà hơn.\n\n- Kiwi rất tốt cho trẻ em, phụ nữ mang thai và người giảm cân, duy trì vóc dáng. Ngaoif ăn trực tiếp, kiwi vàng có thể dùng kèm sữa chua, làm nước ép, làm bánh, trộn salad,...', 0, 0, '[]', -1, '2023-12-05 05:25:50', '2023-12-08 03:05:54'),
(18, 'Cóc trái/ Cóc cầy - 1kg', 'coc-trai-coc-cay-1kg', 'Cóc Trái/Cóc Cầy - 1Kg\n\n* Xuất sứ: Việt Nam\n\n* Quy cách: 1KG\n\nQuả cóc có thể ăn tươi; lớp cùi thịt dày, cứng, giòn và có vị hơi chua-ngọt.\n\nQuả cóc là loại trái cây chứa nhiều vitamin và khoáng chất, có tác dụng giải nhiệt, kích thích vị giác. Không những', 'image-75a10045-47d2-4caf-bf03-134fd949cd51.webp', 15000, 0, 10000, 1, 0, 1, 'Cóc Trái/Cóc Cầy - 1Kg\n\n* Xuất sứ: Việt Nam\n\n* Quy cách: 1KG\n\nQuả cóc có thể ăn tươi; lớp cùi thịt dày, cứng, giòn và có vị hơi chua-ngọt.\n\nQuả cóc là loại trái cây chứa nhiều vitamin và khoáng chất, có tác dụng giải nhiệt, kích thích vị giác. Không những thế, nó còn có những công dụng rất tốt cho sức khỏe.\n\n* Bảo quản: Nơi thoáng mát hoặc nơi có nhiệt độ từ 2 đến 8*C', 0, 0, '[]', -1, '2023-12-06 14:45:59', '2023-12-08 03:07:41'),
(19, 'Cam Cara ruột đỏ - 1kg', 'cam-cara-ruot-do-1kg', 'Xuất xứ : Úc\n\n* Quy cách: kg\n \n\n- Cam Cara có vỏ mỏng màu vàng đậm, ruột đỏ.\n\n- Mọng nước, không hạt, dễ bóc và vị ngọt thơm.\n\n- Có thể dùng ăn trực tiếp, vắt nước hoạc trang trí,...', 'image-dbb12328-6c1e-404a-b83c-0e0f82ee1f60.jpg', 69000, 10, 100, 1, 0, 1, 'Xuất xứ : Úc\n\n* Quy cách: kg\n \n\n- Cam Cara có vỏ mỏng màu vàng đậm, ruột đỏ.\n\n- Mọng nước, không hạt, dễ bóc và vị ngọt thơm.\n\n- Có thể dùng ăn trực tiếp, vắt nước hoạc trang trí,...', 0, 0, '[]', 1, '2023-12-08 03:04:33', '2023-12-08 04:19:32'),
(20, 'Nho đen không hạt nhập khẩu - 500gr', 'nho-den-khong-hat-nhap-khau-500gr', '* Xuất xứ: Mỹ/ Úc/ Nam Phi/ Chille\n\n* Đơn vị tính: VNĐ/ KG\n\n- Hiện nay có nhiều nước trên thế giới trồng và xuất khẩu nho đen không hạt như Mỹ, Nam Phi, Chile, New Zealand,... nhưng nho Mỹ là một trong những giống nho đen không hạt được nhiều người ưa chu', 'image-042c9ce2-090f-44ac-b8ee-02daf158c580.jpg', 109000, 2, 100, 1, 0, 1, '* Xuất xứ: Mỹ/ Úc/ Nam Phi/ Chille\n\n* Đơn vị tính: VNĐ/ KG\n\n- Hiện nay có nhiều nước trên thế giới trồng và xuất khẩu nho đen không hạt như Mỹ, Nam Phi, Chile, New Zealand,... nhưng nho Mỹ là một trong những giống nho đen không hạt được nhiều người ưa chuộng nhất bởi quả to, chắc ăn ngon và màu sắc bắt mắt. \n\n- Nho không hạt cũng có nhiều công dụng như bổ sung loạt dưỡng chất cho cơ thể, tăng cường thị lực, chăm sóc tóc khỏe mạnh và ngăn ngừa ung thư.\n\n', 0, 0, '[]', -1, '2023-12-08 03:09:06', '2023-12-08 03:09:06'),
(21, 'Quýt đường Lai Vung - 1kg', 'quyt-duong-lai-vung-1kg', '* Quy cách : 8 -10 trái/kg\n\n* Xuất xứ : Lai Vung, Đồng Tháp\n\n- Quýt đường là loại trái cây giàu chất dinh dưỡng và tốt cho sức khỏe, không những múi quýt mà hạt hay vỏ đều được tận dụng làm thuốc chữa bệnh.\n\n- Chứa nhiều vitamin và khoáng chất phòng ngừa ', 'image-f74f3ebd-5628-40e4-be14-4d6cdc516f5b.webp', 34000, 0, 100, 1, 0, 1, '* Quy cách : 8 -10 trái/kg\n\n* Xuất xứ : Lai Vung, Đồng Tháp\n\n- Quýt đường là loại trái cây giàu chất dinh dưỡng và tốt cho sức khỏe, không những múi quýt mà hạt hay vỏ đều được tận dụng làm thuốc chữa bệnh.\n\n- Chứa nhiều vitamin và khoáng chất phòng ngừa các bệnh huyết áp, giúp cho hệ tiêu hóa khỏe mạnh, da dẻ hồng hào, tăng sức đề kháng', 0, 0, '[]', -1, '2023-12-08 03:10:41', '2023-12-08 03:10:41'),
(22, 'Sapoche lồng mứt (Hồng xiêm) - 1kg', 'sapoche-long-mut-hong-xiem-1kg', 'Quả Hồng Xiêm là một loại quả mọng, hình cầu hoặc hình quả trứng hoặc hình thon dài, đường kính 4–8cm và chứa từ 2–10 hạt. Vỏ có màu nâu -vàng nhạt. Bên trong là lớp cùi thịt có màu nâu ánh đỏ với kết cấu hạt mịn hơi giống với ruột quả lê. Hồng xiêm chỉ n', 'image-b4525187-4bff-4c6f-b9c8-d4f20340ecf8.webp', 35000, 1, 100, 1, 0, 1, 'Quả Hồng Xiêm là một loại quả mọng, hình cầu hoặc hình quả trứng hoặc hình thon dài, đường kính 4–8cm và chứa từ 2–10 hạt. Vỏ có màu nâu -vàng nhạt. Bên trong là lớp cùi thịt có màu nâu ánh đỏ với kết cấu hạt mịn hơi giống với ruột quả lê. Hồng xiêm chỉ nên ăn khi đã chín vì khi còn xanh nó chứa nhiều nhựa và chát.\n\nĐể biết chắc chắn là nó đã chín người ta hay nắn vỏ xem còn cứng hay đã mềm vì màu vỏ gần như không thay đổi từ lúc mới tạo quả đến khi chín. Hương vị của nó tương tự như mùi đường đen rất thơm và ngon.\n\nHồng xiêm là một loại trái cây có mùi thơm hấp dẫn và nhiều vitamin, khoáng chất, chứa hàm lượng giá trị dinh dưỡng rất cao. Vị ngọt của hồng xiêm là vị ngọt tự nhiên, rất ít chất sodium nên người bị bệnh huyết áp, tim mạch, bệnh thận có thể thoải mái thưởng thức loại trái cây này mà không lo bị dư thừa đường trong cơ thể.', 0, 0, '[]', -1, '2023-12-08 03:12:05', '2023-12-08 03:12:05'),
(23, 'Cherry Đỏ size 9.0', 'cherry-do-size-90', '* Xuất xứ : Mỹ/ Canada/ Úc/ Newzealand/ Chille tùy theo mùa\n\n* Size (quy định theo số vòng sàng) 8.5/ 9.0/ 9.5 (cherry Mỹ) tương đương size (mm) 32+/ 30+/ 28+ (cherry Úc).\n\nTùy theo size lớn nhỏ giá sẽ khác nhau. FS đang quy định theo giá cherry size 9.0\n', 'image-cae4569d-b3ae-4ca3-a87f-ae012f6fe0e7.webp', 199000, 2, 100, 1, 0, 1, '* Xuất xứ : Mỹ/ Canada/ Úc/ Newzealand/ Chille tùy theo mùa\n\n* Size (quy định theo số vòng sàng) 8.5/ 9.0/ 9.5 (cherry Mỹ) tương đương size (mm) 32+/ 30+/ 28+ (cherry Úc).\n\nTùy theo size lớn nhỏ giá sẽ khác nhau. FS đang quy định theo giá cherry size 9.0\n\n- Cherry đỏ có vỏ căng bóng, vỏ màu đỏ sẫm đẹp mắt, cuống dài.\n\n- Hương vị thơm ngọt đậm đà.\n\n- Dùng ăn trực tiếp, ăn kèm sữa chua, làm bánh, trang trí,...', 0, 0, '[]', 1, '2023-12-08 03:12:59', '2023-12-08 03:12:59'),
(24, 'Bầu sao - 500gr', 'bau-sao-500gr', 'Trong 100g bầu có chứa: 95% nước, 25% phosphor, 21% calcium, 2,9% glucid, 0,5% protid, 1% cellulos, 0,2mg sắt và các vitamin: 0,02mg caroten, 0,03mg vitamin B2, 0,40mg vitamin PP, 12mg vitamin C, 0,02mg vitamin B1.\n\nCanh bầu nấu tôm:\nNguyên liệu:\n•    Tôm', 'image-f85bb132-431b-45af-b9f3-d52dc926b946.png', 10000, 0, 1000, 2, 0, 1, 'Trong 100g bầu có chứa: 95% nước, 25% phosphor, 21% calcium, 2,9% glucid, 0,5% protid, 1% cellulos, 0,2mg sắt và các vitamin: 0,02mg caroten, 0,03mg vitamin B2, 0,40mg vitamin PP, 12mg vitamin C, 0,02mg vitamin B1.\n\nCanh bầu nấu tôm:\nNguyên liệu:\n•    Tôm sú hoặc bạn có thể mua tôm nõn.\n•    Bầu 1 trái vừa\n•    Hành tươi, rau mùi, rau thơm\n•    Gia vị: Nước mắm, hạt nêm, đường và bột ngọt.\nBước 1: Tôm bóc vỏ rửa sạch, mẹo nhỏ để bóc vỏ tôm dễ và nhanh là tôm mua về cho luôn vào ngăn đá tủ lạnh khoảng 1h – 2h rồi mang ra bóc. Sau khi bóc vỏ xong, đem ướp với chút nước mắm, hạt nêm và một ít đường.\nBước 2: Hành, rau thơm, rau mùi đem rửa sạch, bỏ lá úa, cắt nhỏ.\nBước 3: Bắt nồi lên bếp, phi hành thơm rồi cho tôm đã ướp thấm gia vị vào đảo đều. Đến khi chín vàng, tỏa mùi thơm, lúc này cho bầu vào đảo cùng, nêm thêm hạt nêm cho vừa vị. Thấy miếng bầu tái thì đổ nước sôi vào tiếp tục nấu. Cuối cùng, khi thấy tất cả đã chín đều thì cho hành mùi vào rồi tắt bếp. Như vậy là bạn đã có món canh bầu nấu tôm thơm ngon bổ dưỡng rồi.', 0, 0, '[]', -1, '2023-12-08 03:26:56', '2023-12-08 03:26:56'),
(25, 'Cải bó xôi - 500gr', 'cai-bo-xoi-500gr', 'Cải bó xôi còn có tên là rau bina, rau chân vịt, là loại rau được trồng phổ biến ở nước ta. Đây là loại rau thường được sử dụng trong chế biến món ăn hoặc ép nước để uống và có dinh dưỡng cao. Rau bina được xem như là một \"siêu thực phẩm\" nhờ có nguồn vit', 'image-c25edabe-7ed1-43cf-a4ae-579b3fc2bec0.jpg', 32000, 0, 150, 2, 0, 1, 'Cải bó xôi còn có tên là rau bina, rau chân vịt, là loại rau được trồng phổ biến ở nước ta. Đây là loại rau thường được sử dụng trong chế biến món ăn hoặc ép nước để uống và có dinh dưỡng cao. Rau bina được xem như là một \"siêu thực phẩm\" nhờ có nguồn vitamin và khoáng chất tuyệt vời đối với sức khỏe.\nTrọng lượng thực tế có thể chênh lệch 10%.', 0, 0, '[]', -1, '2023-12-08 03:33:05', '2023-12-08 03:51:06'),
(26, 'Măng tây - 250gr', 'mang-tay-250gr', 'Cây măng tây xanh chứa nhiều chất xơ, đạm, glucid, các vitammin K, C, A, pyridoxine (B6), riboflavin (B2), thiamin (B1), acid folid, các chất khoáng cần thiết cho cơ thể con người như: kali, magnê, canxi, sắt, kẽm… có tác dụng cải thiện sức khỏe ngăn ngừa', 'image-4fbc2693-13a7-4fd3-b12d-b7d5162a9457.webp', 29000, 0, 100, 2, 0, 1, 'Cây măng tây xanh chứa nhiều chất xơ, đạm, glucid, các vitammin K, C, A, pyridoxine (B6), riboflavin (B2), thiamin (B1), acid folid, các chất khoáng cần thiết cho cơ thể con người như: kali, magnê, canxi, sắt, kẽm… có tác dụng cải thiện sức khỏe ngăn ngừa bệnh tật. Măng tây xanh rất được nhiều người ưa chuộng bởi độ giòn ngọt ngon của măng, măng có thể được chế biến thành nhiều món ăn cực kỳ hấp dẫn bắt mắt dinh dưỡng cao như xào, hấp, luộc, súp,..', 0, 0, '[]', -1, '2023-12-08 03:46:46', '2023-12-08 03:46:46'),
(27, 'Khoai lang mật - 1kg', 'khoai-lang-mat-1kg', 'Khoai lang mật 1KG, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nKhoai lang mật chứa nhiều vitamin A, B, C và nhiều khoáng chất cần thiết cho làn da đẹp. Có thể kết hợp giữa ăn khoai lang và dùng khoai lang mật đắp mặt nạ giúp dưỡng trắng da, c', 'image-4c52f7e9-3482-4cfd-bbec-06bda232649e.jpg', 25000, 0, 1000, 2, 0, 1, 'Khoai lang mật 1KG, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nKhoai lang mật chứa nhiều vitamin A, B, C và nhiều khoáng chất cần thiết cho làn da đẹp. Có thể kết hợp giữa ăn khoai lang và dùng khoai lang mật đắp mặt nạ giúp dưỡng trắng da, chống oxy hoá và tẩy tế bào chết rất tốt.\nKhoai lang mật cung cấp nhiều vitamin và các chất như Potassium, Beta Carotene, Canxi, chất xơ giúp phòng ngừa táo bón và tốt cho tiêu hoá.\n- Mỗi buổi sáng ăn 1 củ khoai lang mật tốt cho quá trình giảm cân.\n- Nên ăn cả phần vỏ khoai vì nó chứa nhiều vitamin và khoáng chất.\n- Không nên ăn khoai đã lên mầm hoặc khoai sùng.\n- Không ăn khoai lang mật nhiều quá sẽ gây sỏi thận vì dư lượng vitamin C, ăn 1 đến 2 củ mỗi ngày là tốt nhất.', 0, 0, '[]', 1, '2023-12-08 03:47:39', '2023-12-08 03:47:39'),
(28, 'Cà chua bi socola - 300gr', 'ca-chua-bi-socola-300gr', 'Cà chua bi socola 300G, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nKhác với những loại cà chua cherry khác, Cà chua socola có hương vị rất đậm đà và vị ngọt thanh rất đặc biệt. Loại quả này ăn rất thơm, không chua như cà chua thường, chúng rấ', 'image-f6472081-0dc0-4615-be05-8639289c8578.jpg', 27000, 0, 150, 2, 0, 1, 'Cà chua bi socola 300G, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nKhác với những loại cà chua cherry khác, Cà chua socola có hương vị rất đậm đà và vị ngọt thanh rất đặc biệt. Loại quả này ăn rất thơm, không chua như cà chua thường, chúng rất mọng nước và đẹp mắt nên thường được dùng như 1 loại trái cây hằng ngày. Chúng có thể chế biến thành các món ăn thông thường trong bữa cơm nhưng ăn sống và ép nước vẫn là ngon nhất.\nNgoài ra còn có các hợp chất hữu cơ như carotenoid, quercetin, chlorogenic acid, lutein và đặc biệt là lycopene có rất nhiều ích lợi cho cơ thể. Với thành phần dinh dưỡng dồi dào như vậy, chắc chắn cà chua bi có những tác động tích cực khi được tiêu thụ thường xuyên.\nTiêu thụ cà chua bi socola thường xuyên dưới dạng ăn sống, nấu chín, làm sinh tố, nước ép,... Đều có thể nhận được những lợi ích sức khỏe rất tốt từ loại thực phẩm này.', 0, 0, '[]', -1, '2023-12-08 03:51:57', '2023-12-08 03:51:57'),
(29, 'Bắp cải trái tim - 500gr', 'bap-cai-trai-tim-500gr', 'Cứ 89g bắp cải tim sẽ cung cấp khoảng 22 calo, 1.1g protein, 5.2 carbohydrate, 2.2g chất xơ, 38.3mcg, 67.6mcg vitamin K, 151mg Kali và một số khoáng chất cần thiết khác. Điều này càng chứng tỏ, bắp cải trái tim là một trong những loại thực phẩm ít calo, k', 'image-31a28c14-6350-4a68-a111-64396bc8c740.png', 15000, 0, 200, 2, 0, 1, 'Cứ 89g bắp cải tim sẽ cung cấp khoảng 22 calo, 1.1g protein, 5.2 carbohydrate, 2.2g chất xơ, 38.3mcg, 67.6mcg vitamin K, 151mg Kali và một số khoáng chất cần thiết khác. Điều này càng chứng tỏ, bắp cải trái tim là một trong những loại thực phẩm ít calo, không chất béo, giàu chất xơ, kali, chất chống oxy hóa và vitamin K, mang lại nhiều công dụng sức khỏe.\nBắp cải tim giàu chất xơ và kali,đây lại là hai dưỡng chất quan trọng mang lại sức khỏe tim mạch, giúp giảm lượn cholesterol xấu trong máu. Trong bắp cải tim có chất lutein, zeaxanthin và vitamin A.', 0, 0, '[]', -1, '2023-12-08 03:59:21', '2023-12-08 03:59:21'),
(30, 'Thanh long ruột đỏ - trái 600gr', 'thanh-long-ruot-do-trai-600gr', '* Xuất xứ : Long An\n\n* Quy cách : 2 trái/ kg\n\n- Thanh long đỏ có vỏ ngoài đỏ đậm, tai quả dài nhọn.\n\n- Ruột màu đỏ đậm, mọng, vị ngon ngọt.\n\n- Thanh long đỏ có thể dùng làm món tráng miêng, sinh tố, ăn kèm sữa chua, trang trí. Thanh long quả to đẹp có thể', 'image-5c6d52a3-49cd-4f2e-85b1-c4f355876d85.jpg', 20000, 10, 100, 1, 0, 1, '* Xuất xứ : Long An\n\n* Quy cách : 2 trái/ kg\n\n- Thanh long đỏ có vỏ ngoài đỏ đậm, tai quả dài nhọn.\n\n- Ruột màu đỏ đậm, mọng, vị ngon ngọt.\n\n- Thanh long đỏ có thể dùng làm món tráng miêng, sinh tố, ăn kèm sữa chua, trang trí. Thanh long quả to đẹp có thể để bày mâm cũng gia tiên, ngày rằm, mồng một.', 0, 0, '[]', 1, '2023-12-08 04:00:52', '2023-12-08 04:00:52'),
(31, 'Thanh long ruột trắng - 1kg', 'thanh-long-ruot-trang-1kg', '* Quy cách : 2 - 3 trái / kg\n\n* Xuất xứ : Long An\n\n- Thanh long trắng vỏ đỏ nhẵn bóng, tai quả dài nhọn, màu xanh đẹp mắt.\n\n- Ruột trắng, vị chua ngọt thanh mát.\n\n- Thanh long trắng có thể dùng làm món tráng miêng, sinh tố, ăn kèm sữa chua, trang trí. Tha', 'image-3a05bc8d-4dc0-486f-9f97-2bf44e8687ff.jpg', 22000, 10, 1000, 1, 0, 1, '* Quy cách : 2 - 3 trái / kg\n\n* Xuất xứ : Long An\n\n- Thanh long trắng vỏ đỏ nhẵn bóng, tai quả dài nhọn, màu xanh đẹp mắt.\n\n- Ruột trắng, vị chua ngọt thanh mát.\n\n- Thanh long trắng có thể dùng làm món tráng miêng, sinh tố, ăn kèm sữa chua, trang trí. Thanh long quả to đẹp có thể để bày mâm cũng gia tiên, ngày rằm, mồng một.', 0, 0, '[]', 1, '2023-12-08 04:01:50', '2023-12-08 04:01:50'),
(32, 'Thơm trái nguyên vỏ - 1 trái', 'thom-trai-nguyen-vo-1-trai', '* Xuất xứ: Tiền Giang.\n\n* Quy cách :\n\n- Trái thơm chứa nhiều nước và nhiều vitamin nên được dùng để ăn trực tiếp hoặc ép lấy nước, chê biến các món ăn rất thông dụng trong cuộc sống hàng ngày \n\n- Chất enzyme bromelain trong trái thơm như một chất chống vi', 'image-c95fbf43-f9b8-40e1-8301-5e9733d9d0cf.jpg', 18000, 0, 100, 1, 0, 1, '* Xuất xứ: Tiền Giang.\n\n* Quy cách :\n\n- Trái thơm chứa nhiều nước và nhiều vitamin nên được dùng để ăn trực tiếp hoặc ép lấy nước, chê biến các món ăn rất thông dụng trong cuộc sống hàng ngày \n\n- Chất enzyme bromelain trong trái thơm như một chất chống viêm tự nhiên giúp chữa lành vết thương đồng thời hỗ trợ tiêu hóa - Ngoài ra thơm còn là loại trái cây yêu thích của các cặp đôi', 0, 0, '[]', 1, '2023-12-08 04:02:46', '2023-12-08 04:02:46'),
(33, 'Xoài cát Hòa Lộc - 1kg', 'xoai-cat-hoa-loc-1kg', '* Xuất xứ: Cái Bè, Tiền Giang\n\n* Quy cách: 3 trái/kg\n\n* Đặt hàng trước 1 ngày\n\n- Xoài cát Hòa Lộc có đặc điểm trái dài, bầu ở phần gần cuống và đỉnh trái nhọn, vỏ mỏng, quả chín thì vàng ươm và hạt dẹt, không bị xơ , thịt xoài rất ngọt và có mùi thơm đặc ', 'image-b5a91932-b74a-4d8e-81bb-47c914fa9162.jpg', 89000, 10, 100, 1, 0, 1, '* Xuất xứ: Cái Bè, Tiền Giang\n\n* Quy cách: 3 trái/kg\n\n* Đặt hàng trước 1 ngày\n\n- Xoài cát Hòa Lộc có đặc điểm trái dài, bầu ở phần gần cuống và đỉnh trái nhọn, vỏ mỏng, quả chín thì vàng ươm và hạt dẹt, không bị xơ , thịt xoài rất ngọt và có mùi thơm đặc trưng \n\n- Xoài Hòa Lộc đứng trong top5 trái cây giàu dinh dưỡng, giúp cải thiện trí nhớ, giúp cho não hoạt động thông suốt đặc biệt đối với người già. Ngoài ra còn giúp ngăn ngừa bệnh tim mạch, bệnh thiếu máu và huyết áp cao nếu ăn xoài thường xuyên, đặc biệt là xoài chín', 0, 0, '[]', 1, '2023-12-08 04:03:42', '2023-12-08 04:03:42'),
(34, 'Táo Rockit 1 ống 4 trái', 'tao-rockit-1-ong-4-trai', '* Xuất xứ : Newwzeland\n\n* Quy cách: ống 375gr (hộp 4 trái)\n- Táo Rockit có vỏ đỏ rượu vang.\n\n- Hương thơm ngọt ngào đặc trưng, giòn và vị ngọt, chua nhẹ\n\n- Táo Rockit là dòng táo có nguồn gốc xuất xứ từ vịnh Hawke của New Zealand với hình dáng nhỏ, vỏ ngo', 'image-614e7876-7733-434d-87ec-179ef0f52cb9.jpg', 149000, 10, 120, 1, 0, 1, '* Xuất xứ : Newwzeland\n\n* Quy cách: ống 375gr (hộp 4 trái)\n- Táo Rockit có vỏ đỏ rượu vang.\n\n- Hương thơm ngọt ngào đặc trưng, giòn và vị ngọt, chua nhẹ\n\n- Táo Rockit là dòng táo có nguồn gốc xuất xứ từ vịnh Hawke của New Zealand với hình dáng nhỏ, vỏ ngoài màu hồng đậm pha chút sắc vàng; có tác dụng giảm cân, đẹp da, rất được nhiều chị em phụ nữ ưa chuộng.\n\n- Táo chắc giòn, hàm lượng nước cao, phần thịt màu trắng ngà như kem,vị ngọt đậm tưởng như đang ăn Envy nhưng cũng thoang thoảng vị của táo Queen. Táo Rockit giúp giảm béo phì, giảm cholesterol và ngừa huyết áp cao.', 0, 0, '[]', 1, '2023-12-08 04:04:50', '2023-12-08 04:05:00'),
(35, 'Vú sữa - 1kg', 'vu-sua-1kg', 'Vú sữa Lò Rèn\n\n* Xuất sứ: Tiền Giang, Việt Nam\n\n* Quy cách: 4-5 trái/ kg\n\n* Giới thiệu sản phẩm:\n\n- Vú sữa Lò Rèn được mệnh danh là \"nữ hoàng\" của xứ sở trái cây Vĩnh Kim, tạo nên thương hiệu riêng gắn liền với vùng đất Vĩnh Kim.\n\n- Vú sữa Lò Rèn rất đặc ', 'image-c410f8f3-deb4-4a8e-96b0-e4c91bc8d20c.jpg', 57000, 10, 102, 1, 0, 1, 'Vú sữa Lò Rèn\n\n* Xuất sứ: Tiền Giang, Việt Nam\n\n* Quy cách: 4-5 trái/ kg\n\n* Giới thiệu sản phẩm:\n\n- Vú sữa Lò Rèn được mệnh danh là \"nữ hoàng\" của xứ sở trái cây Vĩnh Kim, tạo nên thương hiệu riêng gắn liền với vùng đất Vĩnh Kim.\n\n- Vú sữa Lò Rèn rất đặc biệt, quả thường to và trong, có quả to hơn chén ăn cơm, vỏ màu xanh lục nhạt, lúc chín hơi ngả tím nâu. Thịt bên trong thêm có mùi thơm nhẹ và có vị ngọt lịm thanh mát, tựa mùi sữa\n\n- Vú sữa Lò Rèn chứa nhiều vitamin, chất xơ và chất dinh dưỡng chống oxy hóa, giúp ngăn ngừa những căn bệnh nhiễm trùng, ung thư. Vú sữa đặc biệt có lợi cho phụ nữ mang thai và sinh con, và còn tốt cho xương của thai nhi và trẻ nhỏ \n\n* Cách dùng Vú sữa ngon nhất: quả vú sữa khi mới mua về sẽ còn hơi cứng có thể để  từ 2 đến 3 ngày để chín dần ở nhiệt độ thường thoáng mát. Trước khi ăn có thể dùng tay bóp nhẹ đều quả vú sữa để dễ dễ dàng cắt gọt đồng thời làm cho thịt quả vú sữa săn hơn.', 0, 0, '[]', -1, '2023-12-08 04:06:00', '2023-12-08 04:06:00'),
(36, 'Sơ ri - 500gr', 'so-ri-500gr', 'Sơ ri là loại trái cây mọc thành chùm rất phổ biến tại các tỉnh phía Nam. Loại trái này được nhiều bạn trẻ ưa chuộng khi có sở thích ăn các loại trái cây chấm muối.\n\nNgoài ra sơ ri còn được dùng làm nước ép rất bổ dưỡng và đặc biệt tốt cho làn da. ', 'image-3ed27e53-c488-4227-88f1-028ab26129a9.jpg', 16000, 0, 100, 1, 0, 1, 'Sơ ri là loại trái cây mọc thành chùm rất phổ biến tại các tỉnh phía Nam. Loại trái này được nhiều bạn trẻ ưa chuộng khi có sở thích ăn các loại trái cây chấm muối.\n\nNgoài ra sơ ri còn được dùng làm nước ép rất bổ dưỡng và đặc biệt tốt cho làn da. ', 0, 0, '[]', -1, '2023-12-08 04:06:48', '2023-12-08 04:06:48'),
(37, 'Nước ép Cam Quýt - Yellow boy', 'nuoc-ep-cam-quyt-yellow-boy', '* Thành phần: cam sanh + chanh dây + quýt + mật ong\n\n* Quy cách: chai thủy tinh 300ml\n\n* Cung cấp lượng vitamin C rất dồi dào để đảm bảo cho cơ thể bạn chống chọi với các tác nhân xấu xâm nhập vào cơ thể suốt 1 ngày. Vitamin C tự nhiên rất tốt cho cơ thể ', 'image-3baf680f-4e1c-4d3f-9935-0b693998cf4c.jpg', 39000, 10, 100, 3, 0, 1, '* Thành phần: cam sanh + chanh dây + quýt + mật ong\n\n* Quy cách: chai thủy tinh 300ml\n\n* Cung cấp lượng vitamin C rất dồi dào để đảm bảo cho cơ thể bạn chống chọi với các tác nhân xấu xâm nhập vào cơ thể suốt 1 ngày. Vitamin C tự nhiên rất tốt cho cơ thể xây dựng các tế bào kháng thể nhằm ngăn ngừa các loại vi sinh vật và các gốc tự do 1 cách hữu hiệu. Uống 1 chai Yellow boy cách bữa trưa 2 tiếng sẽ tốt nhất và bổ sung sự thiếu hụt năng lượng.', 0, 0, '[]', -1, '2023-12-08 04:08:00', '2023-12-08 04:09:50'),
(38, 'Nước Ép cam Sành', 'nuoc-ep-cam-sanh', '* Thành phần: cam sành tươi ép.\n\n* Quy cách: chai thủy tinh 300ml\n\n* Cam giàu kali và kèm giúp bảo vệ tim mạch. Chất xơ trong cam giúp cải thiện tiêu hóa, cùng với vitamin C tăng cường hệ miễn dịch cho cơ thể.', 'image-56f50e22-d9e5-43db-9e09-6cc5f9cb7c6c.webp', 39000, 0, 121, 3, 0, 1, '* Thành phần: cam sành tươi ép.\n\n* Quy cách: chai thủy tinh 300ml\n\n* Cam giàu kali và kèm giúp bảo vệ tim mạch. Chất xơ trong cam giúp cải thiện tiêu hóa, cùng với vitamin C tăng cường hệ miễn dịch cho cơ thể.', 0, 0, '[]', -1, '2023-12-08 04:08:44', '2023-12-08 04:10:16'),
(39, 'Nước ép Lê Táo - White Aunt', 'nuoc-ep-le-tao-white-aunt', '* Thành phần: lê + táo xanh + chanh + mật ong\n\n* Quy cách: chai thủy tinh 300ml\n\n* Giàu vitamin C, kali vitamin K, vitamin B và chất chống oxi hóa. Dưỡng chất trong nước ép lê cải thiện sự hấp thu chất dinh dưỡng, tăng cường hệ thống miễn dịch, giảm huyết', 'image-0f6e01f9-9284-43e1-ac75-14de5e38d42e.jpg', 39000, 0, 101, 3, 0, 1, '* Thành phần: lê + táo xanh + chanh + mật ong\n\n* Quy cách: chai thủy tinh 300ml\n\n* Giàu vitamin C, kali vitamin K, vitamin B và chất chống oxi hóa. Dưỡng chất trong nước ép lê cải thiện sự hấp thu chất dinh dưỡng, tăng cường hệ thống miễn dịch, giảm huyết áp , tăng cường lưu thông, tăng mật độ xương, hỗ trợ sức khỏe hệ thần kinh, hỗ trợ nhận thức và loại bỏ viêm. Đặc biệt hiệu quả cho người tập luyện cơ bắp vì giúp thư giản cơ và sửa chữa cơ.', 0, 0, '[]', -1, '2023-12-08 04:09:23', '2023-12-08 04:10:08'),
(40, 'Nước ép Thanh long đỏ - Red Daughter', 'nuoc-ep-thanh-long-do-red-daughter', '* Thành phần: thanh long đỏ + dưa hấu + nho + búp sen\n\n* Quy cách: chai thủy tinh 300ml\n\n* Nguồn cung cấp tuyệt vời vitamin A, vitamin C, sắt, canxi, chất xơ và ma-giê do đó giúp bạn chống lại bệnh tim, kiểm soát bệnh tiểu đường và duy trì trọng lượng cơ ', 'image-ae11770d-b0a9-4e9c-a88e-9887390612a9.jpg', 39000, 0, 100, 3, 0, 1, '* Thành phần: thanh long đỏ + dưa hấu + nho + búp sen\n\n* Quy cách: chai thủy tinh 300ml\n\n* Nguồn cung cấp tuyệt vời vitamin A, vitamin C, sắt, canxi, chất xơ và ma-giê do đó giúp bạn chống lại bệnh tim, kiểm soát bệnh tiểu đường và duy trì trọng lượng cơ thể cân đối. Ngoài ra sử dụng nước ép thanh long đỏ mỗi ngày còn tăng cường hệ miễn dịch cho cơ thể bạn.', 0, 0, '[]', -1, '2023-12-08 04:10:46', '2023-12-08 04:10:46'),
(41, 'Nước Ép Ổi ', 'nuoc-ep-oi', '* Thành phần: ổi tươi ép\n\n* Quy cách: chai thủy tinh 300ml\n\n*Ổi giàu vitamin, khoáng chất và chất chống oxy hóa, chất xơ… sẽ giúp phòng ngừa ung thư, tăng cường sức đề kháng, cải thiện hệ tiêu hóa,tăng cường sức khỏe cho đôi mắt, làm đẹp da,\nkiểm soát bện', 'image-8bc4e5dd-a3e3-4dbf-9ee2-8ddd5f684371.jpg', 29000, 0, 101, 3, 0, 1, '* Thành phần: ổi tươi ép\n\n* Quy cách: chai thủy tinh 300ml\n\n*Ổi giàu vitamin, khoáng chất và chất chống oxy hóa, chất xơ… sẽ giúp phòng ngừa ung thư, tăng cường sức đề kháng, cải thiện hệ tiêu hóa,tăng cường sức khỏe cho đôi mắt, làm đẹp da,\nkiểm soát bệnh tiểu đường…', 0, 0, '[]', -1, '2023-12-08 04:11:30', '2023-12-08 04:11:30'),
(42, 'Dưa leo - 500gr', 'dua-leo-500gr', 'Trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\nTrong 100g dưa chuột có chứa 96 gram nước, 0.6 gram protein, 0.1 gram mỡ, 22 gram đường cùng các vitamin và khoáng chất quý. Các vitamin có thể kể đến như: 12mg vitamin C, 0.02mg vitamin B2, 0.03mg vi', 'image-252026aa-9035-4006-a5e8-71b5113383d3.jpg', 10000, 0, 100, 2, 0, 1, 'Trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\nTrong 100g dưa chuột có chứa 96 gram nước, 0.6 gram protein, 0.1 gram mỡ, 22 gram đường cùng các vitamin và khoáng chất quý. Các vitamin có thể kể đến như: 12mg vitamin C, 0.02mg vitamin B2, 0.03mg vitamin B1, 45 đơn vị quốc tế vitamin A. Các khoáng chất vi lượng là 0.3mg sắt, 12mg canxi, 15mg magie, 24mg photpho.\nNgoài chất xơ, trong 142g dưa chuột dưa chuột còn chứa rất nhiều thành phần dinh dưỡng khác như: nước, protein, canxi, sắt, magie, phốt pho, kali, carbohydrate, các loại vitamin A, C, K,...và chất chống oxy hóa khác. Các thành phần dinh dưỡng này kết hợp với chất xơ trong quả dưa chuột sẽ tạo ra rất nhiều lợi ích cho sức khỏe con người khi chúng ta ăn.\nKhông chỉ để ăn trực tiếp, nước dưa leo còn mát lạnh với khả năng thanh lọc cơ thể hiệu quả bởi dưa leo chứa các chất chống oxy hóa giúp chống lại các gốc tự do và có thể loại bỏ độc tố ra khỏi cơ thể.', 0, 0, '[]', -1, '2023-12-08 04:12:54', '2023-12-08 04:12:54'),
(43, 'Khoai tây - 1kg', 'khoai-tay-1kg', 'Khoai tây bi 500G, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nKhoai tây bi nấu chín ở trạng thái còn nguyên vỏ là một nguồn thực phẩm cung cấp nhiều loại vitamin và khoáng chất thiết yếu cho cơ thể, ví dụ như vitamin C hoặc kali.\nTrong khoai ', 'image-ace6a9ab-08e1-488b-a875-d5fb47a192cc.jpg', 17000, 0, 100, 2, 0, 1, 'Khoai tây bi 500G, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nKhoai tây bi nấu chín ở trạng thái còn nguyên vỏ là một nguồn thực phẩm cung cấp nhiều loại vitamin và khoáng chất thiết yếu cho cơ thể, ví dụ như vitamin C hoặc kali.\nTrong khoai tây bi chiếm phần lớn là nước, ngoài ra các thành phần chủ yếu của khoai tây bao gồm carbs, protein và một lượng chất xơ vừa phải, đặc biệt khoai tây bi hầu như không có chất béo.\nMặc dù khoai tây bi không phải là loại thực phẩm giàu chất xơ, nhưng chúng có thể cung cấp một lượng chất xơ đáng kể cho những người thường xuyên ăn chúng.\nPhần vỏ của củ khoai tây bi là nơi chứa nhiều chất xơ nhất, chiếm 12%. Trong khi đó, các sợi khoai tây chủ yếu ở dạng không hòa tan, chẳng hạn như pectin, cellulose và hemiaellulose.', 0, 0, '[]', -1, '2023-12-08 04:13:44', '2023-12-08 04:13:44'),
(44, 'Khoai mỡ - 500gr', 'khoai-mo-500gr', 'Trung bình trong 100gr khoai mỡ đã nấu chín hội tụ 27gr carbohydrate, 140 calo, 4gr chất xơ, 0,1gr chất béo, 1gr chất đạm, 4% vitamin A, 40% vitamin C, 4% sắt, 2% canxi, 13,5% Kali, 0,83% Natri,...\n\nCanh khoai mỡ tôm khô\nNguyên liệu\n•    400g khoai mỡ\n•  ', 'image-b852230f-52dc-4ad2-bb6d-a857f1446e97.webp', 17000, 0, 100, 2, 0, 1, 'Trung bình trong 100gr khoai mỡ đã nấu chín hội tụ 27gr carbohydrate, 140 calo, 4gr chất xơ, 0,1gr chất béo, 1gr chất đạm, 4% vitamin A, 40% vitamin C, 4% sắt, 2% canxi, 13,5% Kali, 0,83% Natri,...\n\nCanh khoai mỡ tôm khô\nNguyên liệu\n•    400g khoai mỡ\n•    40g tôm khô\n•    Hành lá, ngò ôm\n•    Gia vị: muối, hạt nêm, đường, tiêu, nước mắm\nBắc một nồi nước lên bếp, khi nước sắp sôi thì bạn cho tôm khô đã đập dập vào, nêm với một ít muối, hạt nêm và đường.\nSau đó hạ nhỏ lửa, nấu thêm 3 phút nữa thì cho khoai mỡ vào, khuấy đều để khoai mỡ hòa vào với nước.\nTiếp tục nấu đến khi nước trong nồi sôi lại, khoai mỡ chín thì nêm thêm một ít nước mắm vào cho canh đậm đà và dậy mùi hơn, sau đó tắt bếp.', 0, 0, '[]', -1, '2023-12-08 04:14:38', '2023-12-08 04:14:38'),
(45, 'Nấm đùi gà - 300gr', 'nam-dui-ga-300gr', 'Nấm đùi gà 300G, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nNấm đùi gà cung cấp chất xơ, beta-glucan và các thành phần khác có thể tăng cường sức khỏe. Chúng có hương vị tinh tế và có thể được sử dụng để thêm hương vị cho nhiều món mặn. Chúng', 'image-1eb11bed-e2db-43a1-8eeb-525d0444c14c.jpg', 19000, 0, 200, 2, 0, 1, 'Nấm đùi gà 300G, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%.\n\nNấm đùi gà cung cấp chất xơ, beta-glucan và các thành phần khác có thể tăng cường sức khỏe. Chúng có hương vị tinh tế và có thể được sử dụng để thêm hương vị cho nhiều món mặn. Chúng có thể dễ dàng tìm thấy ở hầu hết các cửa hàng tạp hóa, làm cho chúng trở thành một bổ sung thông minh cho chế độ ăn uống của bạn.\nNấm đùi gà có chứa một số chất được cho là có ảnh hưởng đến sức khỏe. Những chất này bao gồm chất xơ, beta-glucan và một số polysaccharid khác – một loại carbohydrate được tìm thấy có ảnh hưởng đến chức năng miễn dịch.\nTrong loại nấm này có chứa nhiều Vitamin như B1, B12, E,… Đây đều là những dưỡng chất giúp tăng sức đề kháng của con người. Bên cạnh đó, trong thành phần của nấm đùi gà còn có nhiều nguyên tố vi lượng như photpho, canxi, protein, cali,…', 0, 0, '[]', -1, '2023-12-08 04:15:37', '2023-12-08 04:15:37'),
(46, 'Nho đỏ không hạt nhập khẩu - 500g', 'nho-do-khong-hat-nhap-khau-500g', '* Xuất xứ: Mỹ\n\n* Quy cách: 500g\n\n- Nho kẹo là giống nho đặc biệt quả màu đỏ tươi hoặc đỏ nhạt, trái tròn và thường nhỏ hơn các loại nho khác.\n\n- Vỏ mỏng, chắc thịt, nhiều nước, không hạt và hương vị đặc trưng. Khi cắn nho vỡ tan trong miệng với một vị ngọ', 'image-756e28e3-a747-4547-91e7-5149672d72d0.jpg', 89000, 20, 100, 1, 0, 1, '* Xuất xứ: Mỹ\n\n* Quy cách: 500g\n\n- Nho kẹo là giống nho đặc biệt quả màu đỏ tươi hoặc đỏ nhạt, trái tròn và thường nhỏ hơn các loại nho khác.\n\n- Vỏ mỏng, chắc thịt, nhiều nước, không hạt và hương vị đặc trưng. Khi cắn nho vỡ tan trong miệng với một vị ngọt đậm đà, hương thơm như kẹo ngọt rấy kích thích vị giác.\n\n- Nho kẹo thích hợp cho trẻ em nhờ hương vị thơm ngon và để làm quà biếu tặng.', 0, 0, '[]', -1, '2023-12-08 04:16:50', '2023-12-08 04:16:50'),
(47, 'Chanh vàng nhập khẩu - 500gr', 'chanh-vang-nhap-khau-500gr', '* Xuất xứ : Mỹ/ Úc/Nam Phi\n\n* Quy cách : 500g (2 -3 trái)\n\n- Chanh vàng (lemon) hay còn được gọi là chanh tây. Loại chanh này thường phân bố ở vùng khí hậu ấm. Quả chanh màu vàng, hình bầu dục và to hơn chanh ta. Chanh tây có mùi thơm và vị chua rất đặc b', 'image-072aa4ea-1eff-4323-b471-fce1a8b60915.webp', 390000, 0, 100, 1, 0, 1, '* Xuất xứ : Mỹ/ Úc/Nam Phi\n\n* Quy cách : 500g (2 -3 trái)\n\n- Chanh vàng (lemon) hay còn được gọi là chanh tây. Loại chanh này thường phân bố ở vùng khí hậu ấm. Quả chanh màu vàng, hình bầu dục và to hơn chanh ta. Chanh tây có mùi thơm và vị chua rất đặc biệt. Bên cạnh đó, chúng còn rất giàu vitamin và các dưỡng chất thiết yếu cho cơ thể. \n\n- Chanh vàng chứa chất Kali có tác dụng kiểm soát huyết áp, tăng cường não bộ và cải thiện chức năng cho hệ thần kinh. Ngoài ra, chanh vàng còn chứa vitamin C giúp tăng cường sức đề kháng, cải thiện hệ tiêu hóa, giúp làm đẹp da, giảm cân, giảm nguy cơ đột quỵ và cân bằng độ PH cho cơ thể,...\n\n- Khi bị cảm bạn có thể sử dụng vài lát chanh pha với nước ấm thêm chút mật ong sẽ làm giảm các triệu chứng cảm cúm, bệnh sẽ phục hồi nhanh chóng. Ngoài ra, chanh vàng ngâm đường phèn còn là bài thuốc quý được rất nhiều người sử dụng để trị ho, trị cảm cúm rất hiệu quả.', 0, 0, '[]', -1, '2023-12-08 04:17:37', '2023-12-08 04:17:37'),
(48, 'Dừa tiện lợi - Combo 3 trái', 'dua-tien-loi-combo-3-trai', 'Dừa tiện lợi được gọt vỏ và mài cho trắng tạo sự đẹp mắt và gọn gàng. Đã làm mỏng ở phần đầu nên có thể dễ dàng khui ra uống mà không cần tốn nhiều sức, rất tiện lợi Dừa được chọn lọc từ những quả dừa xiêm có nhiều nước, co vị ngọt, thơm đặc trưng của giố', 'image-4fcb8254-cea5-47e7-9d29-d6c384b8ff70.jpg', 39000, 0, 100, 1, 0, 1, 'Dừa tiện lợi được gọt vỏ và mài cho trắng tạo sự đẹp mắt và gọn gàng. Đã làm mỏng ở phần đầu nên có thể dễ dàng khui ra uống mà không cần tốn nhiều sức, rất tiện lợi Dừa được chọn lọc từ những quả dừa xiêm có nhiều nước, co vị ngọt, thơm đặc trưng của giống dừa xiêm.', 0, 0, '[]', -1, '2023-12-08 04:20:47', '2023-12-08 04:20:47'),
(49, 'Na Thái - 1kg', 'na-thai-1kg', 'NA GIỐNG THÁI\n\n* Xuất sứ: Việt Nam \n\n*Trọng lượng: 2 trái/ kg\n\n* Mô tả:\n\nNa Thái (hay còn gọi là mãng cầu Thái) là giống Na quả to có ít hạt, ít sâu bệnh. \n\nCó mùi vị thơm ngon đặc biệt, thịt quả mềm ngọt ngon, có nhiều tác dụng bồi bổ sức khỏe: tốt cho h', 'image-0dc38993-4a11-46b1-b315-f06602b46887.jpg', 49000, 10, 100, 1, 0, 1, 'NA GIỐNG THÁI\n\n* Xuất sứ: Việt Nam \n\n*Trọng lượng: 2 trái/ kg\n\n* Mô tả:\n\nNa Thái (hay còn gọi là mãng cầu Thái) là giống Na quả to có ít hạt, ít sâu bệnh. \n\nCó mùi vị thơm ngon đặc biệt, thịt quả mềm ngọt ngon, có nhiều tác dụng bồi bổ sức khỏe: tốt cho hệ tiêu hóa, làm giảm lượng cholesterol trong máu, chứa hàm lượng sắt và vitamin cao tốt cho máu và mắt. Đồng thời làm ngăn ngừa hen xuyễn tái phát.', 0, 0, '[]', 1, '2023-12-08 04:22:05', '2023-12-08 04:22:05'),
(50, 'Phúc bồn tử (mâm xôi) Blackberry - Hộp 170gr', 'phuc-bon-tu-mam-xoi-blackberry-hop-170gr', '* Xuất xứ: Đà Lạt\n\n* Quy cách: hộp 170gr\n\n* Đặt hàng trước 1 ngày.\n\nMâm xôi đen quả đều, mọng, hương vị thơm ngon đặc trưng.\n\nDùng trong các món tráng miệng, pha chế, mứt, trang trí,...', 'image-c91d2f67-bfc2-404f-8cb9-ea71d7d46e8d.jpg', 59000, 10, 100, 1, 0, 1, '* Xuất xứ: Đà Lạt\n\n* Quy cách: hộp 170gr\n\n* Đặt hàng trước 1 ngày.\n\nMâm xôi đen quả đều, mọng, hương vị thơm ngon đặc trưng.\n\nDùng trong các món tráng miệng, pha chế, mứt, trang trí,...', 0, 0, '[]', 1, '2023-12-08 04:22:53', '2023-12-08 04:22:53');
INSERT INTO `products` (`id`, `name`, `slug`, `description`, `avatar`, `price`, `sale`, `number`, `category_id`, `user_id`, `status`, `content`, `total_reviews`, `total_stars`, `options`, `hot`, `created_at`, `updated_at`) VALUES
(51, 'Phúc bồn tử đỏ Raspberry - Hộp 170gr', 'phuc-bon-tu-do-raspberry-hop-170gr', '* Xuất xứ: Đà Lạt\n\n* Quy cách : Hộp 170gr\n\n* Đặt hàng trước 1 ngày\n\n- Phúc bồn tử (hay còn gọi là quả mâm xôi) là quả thuộc họ dâu, vị chua ngọt, chứa nhiều vitamin C, thường phát triển ở vùng khí hậu lạnh \n\n- Quả phúc bồn tử chứa hàm lượng dinh dưỡng cao', 'image-6f450bcf-e92c-4caa-babe-23c7fd8a6199.webp', 69000, 10, 100, 1, 0, 1, '* Xuất xứ: Đà Lạt\n\n* Quy cách : Hộp 170gr\n\n* Đặt hàng trước 1 ngày\n\n- Phúc bồn tử (hay còn gọi là quả mâm xôi) là quả thuộc họ dâu, vị chua ngọt, chứa nhiều vitamin C, thường phát triển ở vùng khí hậu lạnh \n\n- Quả phúc bồn tử chứa hàm lượng dinh dưỡng cao, chứa nhiều chất khoáng và vitamin có thể ngừa được ung thư, tiểu đường, bảo vệ được thị lực, giúp chắc khỏe xương, cải thiện làn da, tóc và hệ tiêu hóa', 0, 0, '[]', 1, '2023-12-08 04:23:35', '2023-12-08 04:23:35'),
(52, 'Lê Nam Phi - 600gr', 'le-nam-phi-600gr', '* Xuất xứ: Nam Phi\n\n* Quy cách: 4 - 6 quả/kg\n\n- Lê Nam Phi có hình dáng thon dài, vỏ ngoài có sự xen kẽ của 3 màu: xanh, đỏ, vàng.\n\n- Lê có vị ngọt dịu, rất giòn và thơm.\n\n- Lê rất tốt cho người bị ho, phụ nữ mang thai và người đang giảm cân.', 'image-ff1df19d-b1b7-441b-9c1b-5dc36cfc2622.webp', 59000, 20, 100, 1, 0, 1, '* Xuất xứ: Nam Phi\n\n* Quy cách: 4 - 6 quả/kg\n\n- Lê Nam Phi có hình dáng thon dài, vỏ ngoài có sự xen kẽ của 3 màu: xanh, đỏ, vàng.\n\n- Lê có vị ngọt dịu, rất giòn và thơm.\n\n- Lê rất tốt cho người bị ho, phụ nữ mang thai và người đang giảm cân.', 0, 0, '[]', -1, '2023-12-08 04:25:24', '2023-12-08 04:25:24'),
(53, 'Cải thìa - 500gr', 'cai-thia-500gr', 'Cải thìa sống (tương đương khoảng 170g) chứa 9 calo, 1g protein, 1,5g carbohydrate, 0,7g chất xơ, không có cholesterol và chỉ 0,1g chất béo không có khả năng sản sinh cholesterol. Với hàm lượng dinh dưỡng lành mạnh như trên, cải thìa không chỉ ngon mà còn', 'image-a54ab69f-dae5-4606-8bc5-e45ddd9df521.png', 10000, 0, 100, 2, 0, 1, 'Cải thìa sống (tương đương khoảng 170g) chứa 9 calo, 1g protein, 1,5g carbohydrate, 0,7g chất xơ, không có cholesterol và chỉ 0,1g chất béo không có khả năng sản sinh cholesterol. Với hàm lượng dinh dưỡng lành mạnh như trên, cải thìa không chỉ ngon mà còn rất có lợi cho sức khỏe.', 0, 0, '[]', -1, '2023-12-08 04:26:53', '2023-12-08 04:26:53'),
(54, 'Cải thảo - 1kg', 'cai-thao-1kg', 'Cải thảo 1KG, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%. Cải thảo và rau họ nhà cải nói chung được các chuyên gia dinh dưỡng đưa vào nhóm thực phẩm có khả năng kìm hãm quá trình lão hóa. Đó là nhờ lượng chất xơ, khoáng chất như phosphor, kali,', 'image-f6ca498b-509c-4afb-910c-e42be537fd4c.png', 15000, 0, 100, 2, 0, 1, 'Cải thảo 1KG, trọng lượng thực tế có thể chênh lệch khoảng 10 - 20%. Cải thảo và rau họ nhà cải nói chung được các chuyên gia dinh dưỡng đưa vào nhóm thực phẩm có khả năng kìm hãm quá trình lão hóa. Đó là nhờ lượng chất xơ, khoáng chất như phosphor, kali, canxi, sắt… có nhiều trong loại rau này. Cải thảo cũng giàu các vitamin A, B, C, E rất tốt cho quá trình chống ôxy hóa và duy trì sự trẻ trung cho làn da phụ nữ.', 0, 0, '[]', -1, '2023-12-08 04:28:02', '2023-12-08 04:28:02'),
(55, 'Khoai mì - 500G', 'khoai-mi-500g', 'Các chất dinh dưỡng được tìm thấy trong 100g khoai mì luộc:\nCalo: 112\nCarbohydrate: 27g\nChất xơ: 1g\nVitamin B1: 20% RDI\nPhốt pho: 5% RDI\nCanxi: 2% RDI\nVitamin B2: 2% RDI\n\nKhoai mì hấp nước cốt dừa - món ăn bình dị, dân dã mang đậm hương miền quê và được l', 'image-4db7d551-03c6-48e8-b323-2821e7130d5a.jpg', 10500, 0, 100, 2, 0, 1, 'Các chất dinh dưỡng được tìm thấy trong 100g khoai mì luộc:\nCalo: 112\nCarbohydrate: 27g\nChất xơ: 1g\nVitamin B1: 20% RDI\nPhốt pho: 5% RDI\nCanxi: 2% RDI\nVitamin B2: 2% RDI\n\nKhoai mì hấp nước cốt dừa - món ăn bình dị, dân dã mang đậm hương miền quê và được lòng rất nhiều thực khách.\nCủ khoai mì mềm dẻo, nóng hổi hòa quyện với vị nước cốt dừa thơm thơm béo ngậy. Khi ăn bạn nên cho vào 1 ít muối mè mặn mặn, dừa nạo ngọt béo và đậu phộng bùi bùi nữa thì đúng là món ăn ngây ngất lòng người đấy!', 0, 0, '[]', -1, '2023-12-08 04:29:08', '2023-12-08 04:29:08'),
(56, 'Nấm linh chi nâu - 125g', 'nam-linh-chi-nau-125g', 'Giá trị dinh dưỡng: Nấm Linh chi chứa 90% nước, 10% còn lại gồm: 10 – 40% protein, 2 – 8% chất béo, 3 – 28% carbohydrate, 3-32% chất xơ, 8- 10% chất tro, vài vitamin, chất khoáng (Kali, Ca, P, Mg, selenium, Fe, Zn, Cu) \nNấm Linh Chi hầm gà \nChuẩn bị nguyê', 'image-e631f7fd-54ec-474e-a632-ce853efa1cae.jpg', 24000, 0, 100, 2, 0, 1, 'Giá trị dinh dưỡng: Nấm Linh chi chứa 90% nước, 10% còn lại gồm: 10 – 40% protein, 2 – 8% chất béo, 3 – 28% carbohydrate, 3-32% chất xơ, 8- 10% chất tro, vài vitamin, chất khoáng (Kali, Ca, P, Mg, selenium, Fe, Zn, Cu) \nNấm Linh Chi hầm gà \nChuẩn bị nguyên liệu: 15gr nấm Linh Chi đã được nghiền bột, 1 con gà ác, gia vị khác. \nCách chế biến: Đầu tiên hãy làm sạch gà, mổ bụng và moi sạch ruột và nhồi Linh Chi vào bụng gà cùng một số gia vị vừa ăn \nTiến hành chưng cách thủy rồi nêm nếm gia vị để ăn gà và uống nước. Đây cũng là món ăn bổ dưỡng, đặc biệt thích hợp với người cao tuổi, phụ nữ sau sinh, người mới phẫu thuật hay mới ốm dậy cần hồi phục cơ thể nhanh chóng.', 0, 0, '[]', -1, '2023-12-08 04:29:54', '2023-12-08 04:29:54');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products_images`
--

CREATE TABLE `products_images` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `product_id` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `products_images`
--

INSERT INTO `products_images` (`id`, `name`, `path`, `product_id`, `created_at`, `updated_at`) VALUES
(5, 'kiwi_vang_2_5457e04cd1984f968e17d944c47fc35c_master.webp', 'image-32258b85-eacc-4ccc-b7ef-14fa78100379.webp', 17, '2023-12-08 03:05:54', '2023-12-08 03:05:54'),
(6, 'coc_trai_2_c669f7037e0c4cd2a627cf241e031429_master.jpg', 'image-327f391a-2558-4ea1-9338-888524ed4a46.jpg', 18, '2023-12-08 03:07:41', '2023-12-08 03:07:41'),
(7, 'nho_den_khong_hat_2_d13e8ac8b79c4700bc36ef6a808fa88f_master.jpg', 'image-e7852290-2fda-4f11-a47d-ec3d1036d7b2.jpg', 20, '2023-12-08 03:09:06', '2023-12-08 03:09:06'),
(8, 'nho_den_khong_hat_1_c0367871f2ac4eb79ed52b921021e1d3_master.png', 'image-8d306ce3-b320-498b-8f47-9b1f549ecd7b.png', 20, '2023-12-08 03:09:06', '2023-12-08 03:09:06'),
(9, 'nho_den_khong_hat_2_c9424c5d3b344b9c9b47d6df61308b91_master.png', 'image-a2f98f39-c882-456b-9481-7766a75a332e.png', 20, '2023-12-08 03:09:06', '2023-12-08 03:09:06'),
(10, 'quyt_duong_2_768731f10bd342a197f4739f322fbfb4_master.webp', 'image-0979b87e-c6af-4729-a160-aa090d97ad7d.webp', 21, '2023-12-08 03:10:41', '2023-12-08 03:10:41'),
(11, '8922ca00092ef2e6e444dc4907382c07_bcd9a2ee410f4b7e9552b147c3dd2388.jpg', 'image-7cfebabf-6171-4ae9-b528-241775300c75.jpg', 22, '2023-12-08 03:12:05', '2023-12-08 03:12:05'),
(12, 'sapo_1_7616cbb822c44e38b03a15ca89348be3_master.png', 'image-cfcde5c9-0e81-4e83-a37b-4ed745febc4d.png', 22, '2023-12-08 03:12:05', '2023-12-08 03:12:05'),
(13, 'sapo_2_6f66727bdc9c436181765bae06e52a8f_master.png', 'image-95583774-bbdd-4e44-a533-46aa9c0eb22d.png', 22, '2023-12-08 03:12:05', '2023-12-08 03:12:05'),
(14, 'cherry_do_size_9.0_2_5d234053c1f14e34ad5d07ef1524ca6c_master.jpg', 'image-f82da442-2a6a-4d88-ad2a-f409b80328fb.jpg', 23, '2023-12-08 03:12:59', '2023-12-08 03:12:59'),
(15, 'chuoi_cau_2_b38ec6b5de6a4a37a4fb5547e6b076bd_master.jpg', 'image-5baa7553-ffac-41e8-ae36-f840874c7f22.jpg', 2, '2023-12-08 03:17:43', '2023-12-08 03:17:43'),
(16, 'chuoi_cau_2_73a0576229114226b2da43f16c6f1c7d_master.png', 'image-f067a178-f6d5-4daf-9cd0-04636ed0eba6.png', 2, '2023-12-08 03:17:43', '2023-12-08 03:17:43'),
(17, 'dua_hau_khong_hat_1_10cdfc6ac03a41eca929af45328e9971_master.jpg', 'image-c38191ba-9536-4894-9810-03ee516b1040.jpg', 3, '2023-12-08 03:19:22', '2023-12-08 03:19:22'),
(18, 'dua_hau_khong_hat_3_1e2e986d307e48ecb81973fb9843a411_master.jpg', 'image-886da2e9-a737-4a62-a8ca-2526f4aea1c5.jpg', 3, '2023-12-08 03:19:22', '2023-12-08 03:19:22'),
(19, 'c5fb21acd0909f566b54ba1333ad8023_edc6974f228c406bb905134e5fcdd10b.jpg', 'image-f39bc66d-4747-415b-ab49-608a490285ef.jpg', 5, '2023-12-08 03:25:48', '2023-12-08 03:25:48'),
(20, 'du_du_vang_1_ae0a4065899843babc438e06cef8787b_master.png', 'image-2b7338df-e0ea-4ece-9a87-c1c38717fa11.png', 5, '2023-12-08 03:25:48', '2023-12-08 03:25:48'),
(21, 'bau_sao_3_7d07837509e443579fbe853c10320a61_master.png', 'image-8b598d88-827c-48bb-8cd2-9ba1e6d564c9.png', 24, '2023-12-08 03:26:56', '2023-12-08 03:26:56'),
(22, 'bau_sao_1_ae1c19e3b5624c528d8d1f792aa1d258_master.jpg', 'image-10b5334f-a3f7-4edd-af74-31e67b8769ca.jpg', 24, '2023-12-08 03:26:56', '2023-12-08 03:26:56'),
(25, 'ca_chua_beef_2_c2527a23c67c4c02bd2a29f222a37d2f_master.jpg', 'image-30263082-3b06-4dea-9c17-93c217b4ad4e.jpg', 4, '2023-12-08 03:35:38', '2023-12-08 03:35:38'),
(26, 'ca_chua_beef_3_0432aa4bfb2946ebaab266a3d96ce59e_master.jpg', 'image-78cf51e9-3050-48a5-a874-6c5d81569853.jpg', 4, '2023-12-08 03:35:38', '2023-12-08 03:35:38'),
(27, 'rau_ma_2_4cc27fc7a1b9416ab64fc5737919967a_master.jpg', 'image-66ca365a-2498-464c-9116-a5b314ddfe45.jpg', 6, '2023-12-08 03:36:52', '2023-12-08 03:36:52'),
(28, 'mang_tay_3_660133f2cc034074baafd096a1e9b6e6_master.webp', 'image-3890b528-049a-4727-92ce-3c67d9065d5d.webp', 26, '2023-12-08 03:46:46', '2023-12-08 03:46:46'),
(29, 'mang_tay_2_c5746b5dcc8f4d59a18c39d2b6ccba5b_master.webp', 'image-a7eeec01-b1c5-4765-9087-44ba57323023.webp', 26, '2023-12-08 03:46:46', '2023-12-08 03:46:46'),
(30, 'khoai_lang_mat_3_b2a2dcc08fca4f11bc72cb989d6d37b4_master.jpg', 'image-a4f4b670-ce39-43c7-a6cf-ffac536d6dea.jpg', 27, '2023-12-08 03:47:39', '2023-12-08 03:47:39'),
(31, 'khoai_lang_mat_2_ae7d97e4c9e84d3fb373b59ddd09738c_master.jpg', 'image-52c6fb6b-0d07-4213-98ed-d0045b64d93b.jpg', 27, '2023-12-08 03:47:39', '2023-12-08 03:47:39'),
(32, 'ca_rot_2_bbe3e8d2b0a14675ab06a0a62f302d94_master.jpg', 'image-31cb0d78-f6cf-480d-ae1b-c15e7c7b14e9.jpg', 7, '2023-12-08 03:48:41', '2023-12-08 03:48:41'),
(33, 'bap_cai_tim_3_6bb16967c627431f8fd6815f2c3b8190_master.png', 'image-47e685ef-bec5-42c1-8055-798b9f7461d0.png', 8, '2023-12-08 03:49:21', '2023-12-08 03:49:21'),
(34, 'vn-11134201-23030-t6x69guarzov64_f4d8c45d9a814b96b8df0606bc91dfe0.jpg', 'image-b5642621-8673-49fa-a13a-a342285fa99d.jpg', 25, '2023-12-08 03:51:06', '2023-12-08 03:51:06'),
(35, 'cai_bo_xoi_1_0946fa3f831343b0808f72136557fa8c_master.webp', 'image-a322b851-7757-4969-9351-a0149fb9a7cf.webp', 25, '2023-12-08 03:51:06', '2023-12-08 03:51:06'),
(36, 'cai_bo_xoi_2_0a31936e7a1b43fabbeeab7ef1260c6e_master.webp', 'image-6596e852-575f-4236-a1c6-0e80a871125e.webp', 25, '2023-12-08 03:51:06', '2023-12-08 03:51:06'),
(37, 'ca_chua_bi_socola_2_575a1710b6a74e25a4c6614b7a31082e_master.png', 'image-57a5fe77-4b48-46df-8740-d8639185cbeb.png', 28, '2023-12-08 03:51:57', '2023-12-08 03:51:57'),
(38, 'ca_chua_bi_socola_3_17547f7a4efb4275bdaaca56665598f5_master.jpg', 'image-5eb32b35-f748-47bc-b11b-e775cdfb299c.jpg', 28, '2023-12-08 03:51:57', '2023-12-08 03:51:57'),
(39, 'buoi_da_xanh_2_4468a6cf6a8a46a199199c64adc3d639_master.jpg', 'image-7b5fc8f9-00d6-4a18-9557-40042f10a6b4.jpg', 10, '2023-12-08 03:54:16', '2023-12-08 03:54:16'),
(40, 'chanh_day_1_9b3cab3daf344fe28764fad865ede76a_master.jpg', 'image-c35392a9-549f-4f40-a366-73b132cfa821.jpg', 16, '2023-12-08 03:54:54', '2023-12-08 03:54:54'),
(41, 'chanh_khong_hat_1_1db7ce1115844f8093f8191b9780138c_master.jpg', 'image-bb686d54-f54f-41f6-99f7-f3f04f96b249.jpg', 15, '2023-12-08 03:55:33', '2023-12-08 03:55:33'),
(42, 'dau_tay_giong_new_zealand_2_919bf809f9a84de4bc36367ae05ab391_master.jpg', 'image-2e9428d5-e7d7-48aa-b18f-b7b7936cbe99.jpg', 12, '2023-12-08 03:55:57', '2023-12-08 03:55:57'),
(43, 'chom_thuong_1_d310ba2bf8a04e2c8b99f03273120668_master.webp', 'image-1b72d016-66ff-44d0-a05f-b3daa0498d2e.webp', 14, '2023-12-08 03:56:30', '2023-12-08 03:56:30'),
(44, 'bap_nep_1_5761a8a0c0364d2a8a68cc152959b27b.jpg', 'image-2e9a577c-35cd-4eec-8417-94400e0b6157.jpg', 11, '2023-12-08 03:57:25', '2023-12-08 03:57:25'),
(45, '1_ce16196dba2f4f56a0d948006b46465b_master.png', 'image-7f06beeb-dcd3-45cc-b968-2c89a932a256.png', 9, '2023-12-08 03:58:11', '2023-12-08 03:58:11'),
(46, '2_3ee2778c6daf4788ac069a6715c06353_master.png', 'image-b943a466-cc49-4017-b643-c31e82fe260c.png', 9, '2023-12-08 03:58:11', '2023-12-08 03:58:11'),
(47, 'bap_cai_tim_3_af0796d720c04af8a30fd86c6a0e30bd_master.jpg', 'image-104cf4ec-9359-4873-96ba-0190069aa21d.jpg', 29, '2023-12-08 03:59:21', '2023-12-08 03:59:21'),
(48, 'bap_cai_tim_1_95eadc0750314776ab8dc79c2f31ac14_master.png', 'image-04073f95-f731-406d-a596-d9016b1ce378.png', 29, '2023-12-08 03:59:21', '2023-12-08 03:59:21'),
(49, 'thanh_long_ruot_do_2_09610c1426f04f3bb23cd16a2e5db7ad_master.jpg', 'image-61cf2738-6d87-433c-b068-34e72178e884.jpg', 30, '2023-12-08 04:00:52', '2023-12-08 04:00:52'),
(50, 'thanh_long_ruot_trang_2_a3762a64ccf5480db1fd3be0b4dd012b_master.jpg', 'image-e52beb18-c7e8-4bae-b867-dfaec8379b03.jpg', 31, '2023-12-08 04:01:50', '2023-12-08 04:01:50'),
(51, 'thom_trai_2_6dfd9070eb2d43a7abb3dc4fd06251b2_master.jpg', 'image-c048239e-d74f-45a8-9d59-79b7cf172c8c.jpg', 32, '2023-12-08 04:02:46', '2023-12-08 04:02:46'),
(52, 'xoai_cat_hoa_loc_2_b46bf2041b90488eac4b7ce4794c9d0a_master.jpg', 'image-6db6953e-e3c3-448f-acb6-332abd646cb6.jpg', 33, '2023-12-08 04:03:42', '2023-12-08 04:03:42'),
(55, 'tao_rockit_2_b147fc34ceb04d02ba96691861248bba_master.jpg', 'image-4c4d154c-8d93-482e-9fbc-9b64a9da205e.jpg', 34, '2023-12-08 04:05:00', '2023-12-08 04:05:00'),
(56, 'tao_rockit_1_7ea1e3ea6b5646b9a61bf56556564596_master.png', 'image-35e514f2-7e8f-4edd-8f93-0a1a118cef67.png', 34, '2023-12-08 04:05:00', '2023-12-08 04:05:00'),
(57, 'a85ffc4b3570cded31b50f6c5b6539c7_22ba427f776a444fb144cf1efda62551.jpg', 'image-29eee3dc-b95b-4f7a-987c-a11ead25ea6d.jpg', 35, '2023-12-08 04:06:00', '2023-12-08 04:06:00'),
(58, 'vu_sua_1_00b0da31040340bea9f66e8fb433e28b_master.png', 'image-64ded21f-f392-4a01-9219-f45e39ce1891.png', 35, '2023-12-08 04:06:00', '2023-12-08 04:06:00'),
(59, 'vu_sua_2_863f2a65230943598a65dda2d9b2aa3c_master.png', 'image-76f3e78a-f246-4684-ae40-8571e1613809.png', 35, '2023-12-08 04:06:00', '2023-12-08 04:06:00'),
(60, 'so_ri_1_ae7b55db735541f5abb25cb1d5aba89f_master.jpg', 'image-2406ed3a-7af6-4fc2-8a59-482c15103ee4.jpg', 36, '2023-12-08 04:06:48', '2023-12-08 04:06:48'),
(61, 'ep_yellow_4eb88599f66d4d7e9fd89ce9ad8dbc4b_master.jpg', 'image-a6b83637-f994-4813-ad7c-8fde518de4cd.jpg', 37, '2023-12-08 04:09:50', '2023-12-08 04:09:50'),
(62, 'ep_white_c3e31f0c368049d6ad9846d12b30d217_master.jpg', 'image-7ceaed59-cf05-44c7-a401-def0172ca299.jpg', 39, '2023-12-08 04:10:08', '2023-12-08 04:10:08'),
(63, 'ep_cam_sanh_-_dua_hau_66ca38743b0a4d40b3d2cd3551f35a8a_master.webp', 'image-4218bfcd-616d-4e32-9e10-abf08ad64c48.webp', 38, '2023-12-08 04:10:16', '2023-12-08 04:10:16'),
(64, 'ep_red_7085250253814a1eb46df15c9e9cf100_master.jpg', 'image-4ceeb76b-3af4-4069-8ce9-2f42ec76ae36.jpg', 40, '2023-12-08 04:10:46', '2023-12-08 04:10:46'),
(65, 'ep_oi_tao_f1793820c5c643a19076a598ce3609c9_master.jpg', 'image-37b2edb0-78bf-4bcd-ae53-e90ce82519da.jpg', 41, '2023-12-08 04:11:30', '2023-12-08 04:11:30'),
(66, 'dua_leo_2_fb3c8a8a693d475e970c03f08ee9488c_master.webp', 'image-ce0e4c14-f805-4c96-a73a-b37af5c6caee.webp', 42, '2023-12-08 04:12:54', '2023-12-08 04:12:54'),
(67, 'dua_leo_3_208db67135874b0a92f6ca9b612cc8af_master.webp', 'image-577fa607-24cb-4251-ac08-0257766a97c2.webp', 42, '2023-12-08 04:12:54', '2023-12-08 04:12:54'),
(68, 'khoai_tay_1_7eb3952d42df440da832560a363c54b6_master.jpg', 'image-9b42f30e-2d85-43db-b9e8-4768a2152e5e.jpg', 43, '2023-12-08 04:13:44', '2023-12-08 04:13:44'),
(69, 'khoai_tay_3_9620e4e0ff6c40fcaa396a96e2414121_master.webp', 'image-5ce1cd5a-835f-45be-94fa-9803858062cb.webp', 43, '2023-12-08 04:13:44', '2023-12-08 04:13:44'),
(70, 'khoai_mo_1_07bbd840b5864ef3b65a0f5f45e3f5d5_master.webp', 'image-cad96f03-5cfa-492d-8bff-a0dbc62b0455.webp', 44, '2023-12-08 04:14:38', '2023-12-08 04:14:38'),
(71, 'khoai_mo_3_148cad024f494d979bde3dafe2d79c6a_master.webp', 'image-ffd6693a-c6fb-4996-8c84-1907d9762c38.webp', 44, '2023-12-08 04:14:38', '2023-12-08 04:14:38'),
(72, 'nam_dui_ga_2_fa830f27d1c740459aabeccfbc0e03a2_master.jpg', 'image-2fbc2908-4f4c-4235-b5de-da8dd06bedd9.jpg', 45, '2023-12-08 04:15:37', '2023-12-08 04:15:37'),
(73, '2_b6f78dfc6a0042c9b0213bbcf34ff231_master.png', 'image-ae557364-feb0-4aa6-b1ed-c5ca9c221513.png', 45, '2023-12-08 04:15:37', '2023-12-08 04:15:37'),
(74, 'nho_do_khong_hat_2_660905de75a24baba286409049a97d89_master.jpg', 'image-211a83ae-b6b0-46a9-a1ca-ccbd9755e45b.jpg', 46, '2023-12-08 04:16:50', '2023-12-08 04:16:50'),
(75, 'chanh_vang_2_17b880257a4145218e13b216b9d66b60_master.webp', 'image-29724bd3-f6b2-4452-8a3e-60e512ae1bc1.webp', 47, '2023-12-08 04:17:37', '2023-12-08 04:17:37'),
(76, 'chanh_vang_2_f3be212858c54f3785fe4fb76be370b0_master.webp', 'image-cf97fecd-0797-4223-9e07-2ef48cd8adf1.webp', 47, '2023-12-08 04:17:37', '2023-12-08 04:17:37'),
(77, 'dua_luoi_tron_2_286743ad637f45a7ad22289c4cfb0769_master.jpg', 'image-98eb41d0-7e20-43ad-85d6-f1d88fe4ef80.jpg', 13, '2023-12-08 04:18:56', '2023-12-08 04:18:56'),
(78, 'cam_cara_2_10219056ceab478392c679fce451110c_master (1).jpg', 'image-54a46520-818d-4eb4-a097-86fe0421b9fb.jpg', 19, '2023-12-08 04:19:32', '2023-12-08 04:19:32'),
(79, 'cam_cara_1_270dde57c4084e12a656f6fc688a729f_master.webp', 'image-7006af01-e201-4cb4-85ce-56387c54e5c5.webp', 19, '2023-12-08 04:19:32', '2023-12-08 04:19:32'),
(80, 'dua_tien_loi_-_3_trai_462ab9e41f3f4de1b65fc5c2feafc700_master.jpg', 'image-0f602cad-471e-486d-a51d-c17abbc539e2.jpg', 48, '2023-12-08 04:20:47', '2023-12-08 04:20:47'),
(81, 'dua_tien_loi_-_3_trai_1_f965f24a19484bca96815d2c8ef279b5_master.jpg', 'image-2e194253-6854-4ad5-a586-26d697c8d3cf.jpg', 48, '2023-12-08 04:20:47', '2023-12-08 04:20:47'),
(82, 'na_thai_2_e027f51b1b6142e697b2579ed9c96c4d_master.jpg', 'image-c0cb13be-0b5b-46b9-ab93-cb3e3437f3e8.jpg', 49, '2023-12-08 04:22:05', '2023-12-08 04:22:05'),
(83, 'phuc_bon_tu_den_2_f521b4f7d61c49cf95d8f4dd49895673_master.jpg', 'image-297615d7-e1d3-49f7-af01-04f579c8b9fe.jpg', 50, '2023-12-08 04:22:53', '2023-12-08 04:22:53'),
(84, 'phuc_bon_tu_do_1_53a30ba87cc84df3b7ca2ec869b3be8a_master.webp', 'image-905752a7-5002-44b3-bb97-8dda99abfd87.webp', 51, '2023-12-08 04:23:35', '2023-12-08 04:23:35'),
(85, '2_42f8d0aa4d6247e8a41a8b5996ce7a0a_master.webp', 'image-305488a5-5375-4106-a2fe-1bd41dbde868.webp', 1, '2023-12-08 04:24:32', '2023-12-08 04:24:32'),
(86, '3_96ce649d97ee4d6f98ffdc5eda6ae9ec_master.webp', 'image-9c9500e8-e7fa-4801-bfb3-4d62aae9dea3.webp', 1, '2023-12-08 04:24:32', '2023-12-08 04:24:32'),
(87, 'le_nam_phi_2_96b30cebba584ff8b50415cf1e5cbb32_master.jpg', 'image-cbe6c441-6b5e-455b-8425-e9e5bce61a18.jpg', 52, '2023-12-08 04:25:24', '2023-12-08 04:25:24'),
(88, '1_493096a9c64540749a81561dbb59d9ff_master.png', 'image-8704dff5-7ecb-48ca-b869-fb33f4db9b56.png', 53, '2023-12-08 04:26:53', '2023-12-08 04:26:53'),
(89, '1_aaa14a690dd04f7b9ae772327c526bd9_master.png', 'image-fd32c461-22a1-4c3b-96c1-65efad38ca5f.png', 54, '2023-12-08 04:28:02', '2023-12-08 04:28:02'),
(90, 'khoai_mi_1_b1bf9efc1e60417c89d20a0a16284363.jpg', 'image-fba722d0-454c-4635-93c1-a67ae411f101.jpg', 55, '2023-12-08 04:29:08', '2023-12-08 04:29:08'),
(91, 'khoai_mi_1_b1bf9efc1e60417c89d20a0a16284363 (1).jpg', 'image-df2a075e-e06c-4acb-8fdd-1e53cafb1771.jpg', 55, '2023-12-08 04:29:08', '2023-12-08 04:29:08'),
(92, 'vn-11134201-7qukw-lgc2gkmfbk2y59_3f5374d854f945d18ce26ed284598bf6.jpg', 'image-9c0fa3b0-a119-4606-bea2-e2a96460d4ec.jpg', 56, '2023-12-08 04:29:54', '2023-12-08 04:29:54');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `guard_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_id` int(11) DEFAULT 0,
  `permission_id` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `slides`
--

CREATE TABLE `slides` (
  `id` int(10) UNSIGNED NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `hot` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `slides`
--

INSERT INTO `slides` (`id`, `avatar`, `link`, `name`, `status`, `hot`, `created_at`, `updated_at`) VALUES
(1, 'image-cf71cde0-9675-40d9-aa7d-e82271004a78.png', 'https://www.canva.com/design/DAF19i_V0U8/RP58GeG1z2NZFBhUxhEsVQ/edit', 'Slide 1', 1, -1, '2023-11-30 23:04:23', '2023-12-03 22:36:41'),
(2, 'image-803294bf-8d39-4082-9702-a8b29119dde0.png', 'https://www.canva.com/design/DAF19i_V0U8/RP58GeG1z2NZFBhUxhEsVQ/edit', 'slide 2', 1, -1, '2023-11-30 23:04:43', '2023-12-03 22:33:29'),
(3, 'image-15080e46-ce44-46c5-9c95-138fa607662a.png', 'https://file.hstatic.net/200000217865/file/banner_3_1d0a2959398a40f4bb25392ea870959b.png', 'Slide1', 1, -1, '2023-12-03 19:56:15', '2023-12-03 22:28:03');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transactions`
--

CREATE TABLE `transactions` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(11) DEFAULT 0,
  `product_id` int(11) DEFAULT 0,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `price` float DEFAULT 0,
  `discount` int(11) DEFAULT 0,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `total_price` float DEFAULT 0,
  `status` int(11) DEFAULT 0,
  `user_id` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `transactions`
--

INSERT INTO `transactions` (`id`, `order_id`, `product_id`, `name`, `avatar`, `price`, `discount`, `quantity`, `total_price`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 'Cam vàng Mỹ/Úc - 1kg', 'image-4b1304f2-81da-4ab8-81e9-492fce0e4a79.jpg', 71000, 0, 1, 71000, 1, 2, '2023-12-02 03:08:49', '2023-12-02 03:08:49'),
(2, 2, 2, 'Cam vàng Mỹ/Úc - 1kg', 'image-4b1304f2-81da-4ab8-81e9-492fce0e4a79.jpg', 71000, 0, 1, 71000, 1, 2, '2023-12-02 03:24:00', '2023-12-02 03:24:00'),
(3, 3, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-606934b1-fa7c-4bc6-97ea-d297af4625c1.webp', 35000, 0, 1, 35000, 1, 2, '2023-12-02 17:05:05', '2023-12-02 17:05:05'),
(4, 4, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-606934b1-fa7c-4bc6-97ea-d297af4625c1.webp', 35000, 0, 1, 35000, 1, 2, '2023-12-02 17:13:22', '2023-12-02 17:13:22'),
(5, 5, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-606934b1-fa7c-4bc6-97ea-d297af4625c1.webp', 35000, 0, 1, 35000, 1, 2, '2023-12-02 17:14:18', '2023-12-02 17:14:18'),
(6, 6, 4, 'Cherry Đỏ size', 'image-6e923343-d9f6-4e7d-940b-2264e053e061.webp', 199000, 0, 1, 199000, 1, 2, '2023-12-02 17:18:10', '2023-12-02 17:18:10'),
(7, 7, 2, 'Cam vàng Mỹ/Úc - 1kg', 'image-4b1304f2-81da-4ab8-81e9-492fce0e4a79.jpg', 71000, 0, 1, 71000, 1, 2, '2023-12-03 00:54:50', '2023-12-03 00:54:50'),
(8, 8, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-606934b1-fa7c-4bc6-97ea-d297af4625c1.webp', 35000, 0, 1, 35000, 1, 2, '2023-12-03 06:56:37', '2023-12-03 06:56:37'),
(9, 9, 4, 'Cherry Đỏ size', 'image-6e923343-d9f6-4e7d-940b-2264e053e061.webp', 199000, 0, 1, 199000, 1, 2, '2023-12-03 12:58:41', '2023-12-03 12:58:41'),
(10, 10, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-606934b1-fa7c-4bc6-97ea-d297af4625c1.webp', 35000, 0, 1, 35000, 1, 2, '2023-12-03 12:58:57', '2023-12-03 12:58:57'),
(11, 11, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-606934b1-fa7c-4bc6-97ea-d297af4625c1.webp', 35000, 0, 1, 35000, 1, 2, '2023-12-03 13:00:12', '2023-12-03 13:00:12'),
(12, 12, 4, 'Cherry Đỏ size', 'image-6e923343-d9f6-4e7d-940b-2264e053e061.webp', 199000, 0, 1, 199000, 1, 2, '2023-12-03 13:00:35', '2023-12-03 13:00:35'),
(13, 13, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-606934b1-fa7c-4bc6-97ea-d297af4625c1.webp', 35000, 0, 1, 35000, 1, 2, '2023-12-03 14:58:36', '2023-12-03 14:58:36'),
(14, 13, 1, 'Cam Cara ruột đỏ - 1kg', 'image-f32851ec-e079-493a-a76f-e85776d41061.webp', 61000, 0, 1, 61000, 1, 2, '2023-12-03 14:58:36', '2023-12-03 14:58:36'),
(15, 14, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-606934b1-fa7c-4bc6-97ea-d297af4625c1.webp', 35000, 0, 1, 35000, 1, 2, '2023-12-03 14:59:31', '2023-12-03 14:59:31'),
(16, 15, 2, 'Cam vàng Mỹ/Úc - 1kg', 'image-f9b8c332-d786-41e9-951c-d5f2e1b587ff.jpg', 71000, 0, 1, 71000, 1, 4, '2023-12-03 19:16:29', '2023-12-03 19:16:29'),
(17, 16, 14, ' Chôm chôm thường - 1kg', 'image-049461b0-3628-4263-b75f-8146e9f6bec3.jpg', 42000, 4200, 1, 37800, 1, 4, '2023-12-04 01:51:39', '2023-12-04 01:51:39'),
(18, 16, 2, 'Cam vàng Mỹ/Úc - 1kg', 'image-f9b8c332-d786-41e9-951c-d5f2e1b587ff.jpg', 71000, 0, 1, 71000, 1, 4, '2023-12-04 01:51:39', '2023-12-04 01:51:39'),
(19, 17, 2, 'Cam vàng Mỹ/Úc - 1kg', 'image-f9b8c332-d786-41e9-951c-d5f2e1b587ff.jpg', 71000, 0, 1, 71000, 1, 4, '2023-12-04 01:56:34', '2023-12-04 01:56:34'),
(20, 18, 2, 'Cam vàng Mỹ/Úc - 1kg', 'image-f9b8c332-d786-41e9-951c-d5f2e1b587ff.jpg', 71000, 0, 1, 71000, 1, 4, '2023-12-04 02:02:06', '2023-12-04 02:02:06'),
(21, 19, 2, 'Cam vàng Mỹ/Úc - 1kg', 'image-f9b8c332-d786-41e9-951c-d5f2e1b587ff.jpg', 71000, 0, 1, 71000, 1, 4, '2023-12-04 02:02:44', '2023-12-04 02:02:44'),
(22, 20, 2, 'Cam vàng Mỹ/Úc - 1kg', 'image-f9b8c332-d786-41e9-951c-d5f2e1b587ff.jpg', 71000, 0, 1, 71000, 1, 7, '2023-12-05 06:53:03', '2023-12-05 06:53:03'),
(23, 21, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-31d553a7-bfbb-489d-8b45-c574cd2e8277.jpg', 35000, 0, 1, 35000, 1, 7, '2023-12-05 06:55:40', '2023-12-05 06:55:40'),
(24, 22, 5, 'Cam Cara ruột đỏ - 1kg', 'image-7b8b518a-d451-4232-8258-01d5809877ff.jpg', 69000, 6900, 1, 62100, 1, 8, '2023-12-06 06:19:32', '2023-12-06 06:19:32'),
(25, 22, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-31d553a7-bfbb-489d-8b45-c574cd2e8277.jpg', 35000, 0, 1, 35000, 1, 8, '2023-12-06 06:19:32', '2023-12-06 06:19:32'),
(26, 23, 11, 'Bắp Nếp - 1 trái', 'image-d3443c12-cd5f-464a-bf26-698d7b54e2fe.jpg', 9000, 0, 1, 9000, 1, 8, '2023-12-06 06:20:21', '2023-12-06 06:20:21'),
(27, 23, 12, 'Dâu tây giống New Zealand - hộp 500gr', 'image-30dc6fbf-2ee9-48e0-bebe-15c2bf6c026c.jpg', 20900, 2090, 1, 18810, 1, 8, '2023-12-06 06:20:21', '2023-12-06 06:20:21'),
(28, 24, 2, 'Cam vàng Mỹ/Úc - 1kg', 'image-f9b8c332-d786-41e9-951c-d5f2e1b587ff.jpg', 71000, 0, 1, 71000, 1, 7, '2023-12-06 14:10:28', '2023-12-06 14:10:28'),
(29, 25, 9, ' Cà tím - 500gr', 'image-e3272d3d-cee3-47ac-ac45-597db69155cf.png', 11000, 1100, 1, 9900, 1, 7, '2023-12-06 14:13:09', '2023-12-06 14:13:09'),
(30, 25, 8, 'Bắp cải tím - 1kg', 'image-e419a708-7a2e-4906-9e5d-f2c88e859d26.webp', 24000, 2400, 1, 21600, 1, 7, '2023-12-06 14:13:09', '2023-12-06 14:13:09'),
(31, 26, 2, 'Cam vàng Mỹ/Úc - 1kg', 'image-f9b8c332-d786-41e9-951c-d5f2e1b587ff.jpg', 71000, 0, 1, 71000, 1, 7, '2023-12-06 14:13:58', '2023-12-06 14:13:58'),
(32, 26, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-31d553a7-bfbb-489d-8b45-c574cd2e8277.jpg', 35000, 0, 1, 35000, 1, 7, '2023-12-06 14:13:58', '2023-12-06 14:13:58'),
(33, 27, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-31d553a7-bfbb-489d-8b45-c574cd2e8277.jpg', 35000, 0, 1, 35000, 1, 7, '2023-12-06 14:17:17', '2023-12-06 14:17:17'),
(34, 27, 5, 'Cam Cara ruột đỏ - 1kg', 'image-7b8b518a-d451-4232-8258-01d5809877ff.jpg', 69000, 6900, 1, 62100, 1, 7, '2023-12-06 14:17:17', '2023-12-06 14:17:17'),
(35, 28, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-31d553a7-bfbb-489d-8b45-c574cd2e8277.jpg', 35000, 0, 1, 35000, 1, 7, '2023-12-06 14:17:52', '2023-12-06 14:17:52'),
(36, 28, 5, 'Cam Cara ruột đỏ - 1kg', 'image-7b8b518a-d451-4232-8258-01d5809877ff.jpg', 69000, 6900, 1, 62100, 1, 7, '2023-12-06 14:17:52', '2023-12-06 14:17:52'),
(37, 29, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-31d553a7-bfbb-489d-8b45-c574cd2e8277.jpg', 35000, 0, 1, 35000, 1, 7, '2023-12-06 14:26:22', '2023-12-06 14:26:22'),
(38, 29, 5, 'Cam Cara ruột đỏ - 1kg', 'image-7b8b518a-d451-4232-8258-01d5809877ff.jpg', 69000, 6900, 1, 62100, 1, 7, '2023-12-06 14:26:22', '2023-12-06 14:26:22'),
(39, 30, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-31d553a7-bfbb-489d-8b45-c574cd2e8277.jpg', 35000, 0, 1, 35000, 1, 7, '2023-12-06 14:29:27', '2023-12-06 14:29:27'),
(40, 30, 5, 'Cam Cara ruột đỏ - 1kg', 'image-7b8b518a-d451-4232-8258-01d5809877ff.jpg', 69000, 6900, 1, 62100, 1, 7, '2023-12-06 14:29:27', '2023-12-06 14:29:27'),
(41, 31, 3, 'Chanh vàng nhập khẩu - 500gr', 'image-31d553a7-bfbb-489d-8b45-c574cd2e8277.jpg', 35000, 0, 1, 35000, 1, 7, '2023-12-06 14:33:15', '2023-12-06 14:33:15'),
(42, 31, 5, 'Cam Cara ruột đỏ - 1kg', 'image-7b8b518a-d451-4232-8258-01d5809877ff.jpg', 69000, 6900, 1, 62100, 1, 7, '2023-12-06 14:33:15', '2023-12-06 14:33:15'),
(43, 32, 5, 'Cam Cara ruột đỏ - 1kg', 'image-7b8b518a-d451-4232-8258-01d5809877ff.jpg', 69000, 6900, 1, 62100, 1, 7, '2023-12-07 01:25:43', '2023-12-07 01:25:43');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `type` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `birthday` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `phone`, `avatar`, `gender`, `type`, `status`, `address`, `birthday`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'doantotnghiep@gmail.com', 'phuphan', '$2b$10$w0ow878UzCnHcEtyj8k3JeaCteJxyG29CohwCGqSTU3syBtUBJmf6', NULL, NULL, 'male', 1, 1, NULL, NULL, '2023-11-30 22:55:53', '2023-11-30 22:55:53'),
(2, 'Hạ Linh 0707', 'halinh0707@gmail.com', 'halinh0707', '$2b$10$TRUzt1okOQT6qCYGxF4ZquSk4dXuoOVS.C6ui2y4WWwJxLLerjT6K', '0909666777', 'image-b1e04110-c60a-46a6-ac66-41ff739e4e6f.jpg', 'male', 2, 1, NULL, '2023-12-14 17:00:00', '2023-12-02 01:56:26', '2023-12-03 04:39:15'),
(3, 'Admin', 'admin@gmail.com', 'traicay', '$2b$10$aCRVsnO5lOO3CJdZNVVJZ.XDCSbVvMUSMOsHQwioBBkVfWFxg5BR2', NULL, NULL, 'male', 1, 1, NULL, NULL, '2023-12-03 14:50:41', '2023-12-03 14:50:41'),
(4, 'vinh', 'vinh@gmail.com', 'vinh', '$2b$10$GPbBqBttgLyHtEnPlU5joOTzJHoN1L9VsS1reWlSpLd0uIsMay03.', '+84123456789', NULL, 'male', 2, 1, NULL, NULL, '2023-12-03 19:15:24', '2023-12-03 19:15:24'),
(5, 'vinh', 'vinh@gmail.com', 'vinh', '$2b$10$111Ce3pm1v2QT7UviXDOVOiIImEt5RbTKCnqKUJ/NdRGO9wVDtzWW', '+84123456789', NULL, 'male', 2, 1, NULL, NULL, '2023-12-03 19:15:39', '2023-12-03 19:15:39'),
(6, 'Huy', 'huynguyen03022003@gmail.com', 'huy_03', '$2b$10$t./yZVSsEZ16zy.M2SOBNOFuug1uc6QbT2ZPBEwWw04z0D1o7gHqe', '0865405630', 'image-89aade93-5b6f-47a4-a3c3-acf2a38bcc8f.jpg', 'male', 2, 1, NULL, NULL, '2023-12-04 18:29:02', '2023-12-07 01:11:29'),
(7, 'Huy', 'nguyenduchuy03022003@gmail.com', 'Huy', '$2b$10$TX5Vt3PKuJXD.4KFF.SPLe6mYwzpctNkkl8vnGUDV0u6Gmb5lEEMC', '0865405630', NULL, 'other', 2, 1, NULL, NULL, '2023-12-05 06:01:09', '2023-12-06 06:13:53'),
(8, 'Huyền', 'lethithuhuyen4823@gmail.com', 'Huyền', '$2b$10$Byj1Cd23tp.6OtTiUWaaK.8CqANrhVp8Z/xhlSyJqniVGLvrQlYBS', '097845613', NULL, 'female', 2, 1, NULL, NULL, '2023-12-06 06:16:59', '2023-12-06 06:16:59'),
(9, 'huy', 'huynguyen03@gmail.com', 'Huy', '$2b$10$xKwJPlemeqQnDX2sr2YK7ucU9UxfHvyI36eb.UECwelCTm.di.LZC', '0865405630', NULL, 'male', 2, 1, NULL, NULL, '2023-12-07 01:24:38', '2023-12-07 01:24:38');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_id` int(11) DEFAULT 0,
  `user_id` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `user_roles`
--

INSERT INTO `user_roles` (`id`, `role_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL),
(2, 1, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `votes`
--

CREATE TABLE `votes` (
  `id` int(10) UNSIGNED NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `number` int(11) DEFAULT 0,
  `user_id` int(11) DEFAULT 0,
  `product_id` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `votes`
--

INSERT INTO `votes` (`id`, `content`, `number`, `user_id`, `product_id`, `created_at`, `updated_at`) VALUES
(1, 'hay quá chào bạn', 4, 2, 2, '2023-12-03 04:38:22', '2023-12-03 04:38:22'),
(2, 'OK chào bạn', 4, 2, 2, '2023-12-03 04:38:53', '2023-12-03 04:38:53'),
(3, 'Hay quá , sản phẩm tuyệt vơi. ', 5, 2, 4, '2023-12-03 04:42:40', '2023-12-03 04:42:40'),
(4, 'Đúng là sản phẩm ngon xịn quá, cảm ơn', 5, 2, 3, '2023-12-03 14:57:07', '2023-12-03 14:57:07'),
(5, 'Sản phẩm kém chất lượng', 2, 2, 3, '2023-12-03 14:57:29', '2023-12-03 14:57:29'),
(7, 'Rau tươi giá hợp lí', 4, 6, 6, '2023-12-08 02:49:39', '2023-12-08 02:49:39');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `products_images`
--
ALTER TABLE `products_images`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `slides`
--
ALTER TABLE `slides`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT cho bảng `products_images`
--
ALTER TABLE `products_images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `slides`
--
ALTER TABLE `slides`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `votes`
--
ALTER TABLE `votes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
