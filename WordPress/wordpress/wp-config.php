<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'wp_first_project' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '>sX@Mt5!hfGU`>`]ETbZ|W4ioNNbi`_;N/8+5D%5#;EEFp`@Sj~ldC3-XlL;aj0]' );
define( 'SECURE_AUTH_KEY',  'G,/D)VMesW*z@Uajsy)staZ(M]+@2oj#c18(bvGgCpAz5byDlA*o^ab0ivajC!7T' );
define( 'LOGGED_IN_KEY',    '8[S>F3(L=rJr9tLNjm%rU$ ju(n(P3IKXDLLO %;o0u-Ahm3~k0I5(!|iYekuCP}' );
define( 'NONCE_KEY',        'cwA>Os6je 7wnSeDb*5B5cV%TnHI;:xO;>%px_KIj@WE[k0?GN2//XsZswW.H !6' );
define( 'AUTH_SALT',        '-.wSX#i{;_h|pp`Z|y/v8<^8y-&i7$!,QhMEen$6UX(S%s@$]zE-8f?eQ)^@Td1.' );
define( 'SECURE_AUTH_SALT', 'JZoOrj=J?6H}SUkGJCT&6Z>uW?Llkz>GIkSUvZ(^#+zFG5n>q5?}9~It`iTicW}J' );
define( 'LOGGED_IN_SALT',   'K5G<M$qJDF.^|o!:/JeL]p|n(ZuPQ62AB,?9(1B$V;K.P Y}G0MBDmPP-6Q[c+Y+' );
define( 'NONCE_SALT',       'C)v%_}@nij2rorP!1gx3msaRT$%v>Ce?o>JdU!u4*[[05,fugd@nVBdGCK4871`K' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
