<?php
// Получаем все поля
$data = $_POST;
$errors = [];

// Ограничение на частоту отправки с одного IP
$ip = $_SERVER['REMOTE_ADDR'];
$lockfile = __DIR__ . '/.formlock_' . md5($ip);
$now = time();
$limit = 60; // секунд

if (file_exists($lockfile)) {
  $last = (int) file_get_contents($lockfile);
  if ($now - $last < $limit) {
    $wait = $limit - ($now - $last);
    echo "rate_limit:$wait";
    exit;
  }
}
// Записываем текущее время отправки
file_put_contents($lockfile, $now);

// Проверка обязательных полей
foreach ($data as $key => $value) {
  if (is_array($value))
    $value = implode(', ', $value);
  if (trim($value) === '') {
    $errors[] = "Поле '$key' обязательно для заполнения.";
  }
}
// Проверка имени
if (isset($data['name']) && !preg_match("/^[-' a-zA-Zа-яА-ЯёЁ]+$/u", $data['name'])) {
  $errors[] = "Имя может содержать только буквы, пробел, - и '";
}
// Проверка телефона
if (isset($data['phone'])) {
  $digits = preg_replace('/\D/', '', $data['phone']);
  if (strlen($digits) !== 11) {
    $errors[] = "Телефон должен содержать 11 цифр.";
  }
}

if ($errors) {
  echo "validation_error:" . implode(' ', $errors);
  exit;
}

// Массив для красивых названий полей
$field_names = [
  'name' => 'Имя',
  'phone' => 'Телефон',
  'comment' => 'Комментарий',
  // Добавьте другие поля, если появятся
];

// Формируем HTML-письмо (на всю ширину, значения с названием поля)
$message = '<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"></head>';
$message .= '<body style="font-family:Arial,sans-serif;background:#f9f9f9;padding:20px;">';
$message .= '<table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px #eee;">';
$message .= '<tr style="background:#f3f3f3;"><th style="padding:12px 8px;text-align:left;border-bottom:1px solid #e0e0e0;">Поле</th><th style="padding:12px 8px;text-align:left;border-bottom:1px solid #e0e0e0;">Значение</th></tr>';
foreach ($data as $key => $value) {
  if (is_array($value))
    $value = implode(', ', $value);
  $label = isset($field_names[$key]) ? $field_names[$key] : $key;
  $message .= '<tr><td style="padding:8px 8px;border-bottom:1px solid #f0f0f0;">' . htmlspecialchars($label) . '</td><td style="padding:8px 8px;border-bottom:1px solid #f0f0f0;">' . htmlspecialchars($value) . '</td></tr>';
}
$message .= '</table>';
$message .= '</body></html>';

$to = "andre.dena.919@mail.ru";
$subject = "Заявка на замер";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: noreply@" . $_SERVER['SERVER_NAME'] . "\r\n";
$success = mail($to, $subject, $message, $headers);

if ($success) {
  echo "success";
  exit;
} else {
  echo "error";
}
?>