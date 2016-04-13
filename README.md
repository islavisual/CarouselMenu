# CarouselMenu
Plugin to create navigation menus with carousel effect

Install
=======
Insert the following source code files in your site.
```html
<script src="js/carousel-menu.js"></script>
<link href="css/carousel-menu.css" rel="stylesheet">
```

How to use
==========
There are several ways to use

Basic Use
---------
```html
<nav role="navigation" class="navbar">
	<div class="navbar-header">
		<button data-target=".horizontal-menu" data-toggle="collapse" class="navbar-toggle collapsed" type="button">
			<span class="sr-only">Desplegar navegación</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
	</div>

	<div class="collapse navbar-collapse horizontal-menu">
		<ul class="nav navbar-nav">
			<li class="active"><a href="#">Home</a></li>
			<li><a href="#">Link #1</a></li>
			<li><a href="#submenu">Link #2</a></li>
		</ul>
		<ul class="nav navbar-nav">
			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown #1 <b class="caret"></b></a>
				<ul class="dropdown-menu">
					<li><a href="#">Item #1</a></li>
					<li><a href="#">Item #2</a></li>
					<li><a href="#">Item #3</a></li>
				</ul>
			</li>
			<li><a href="#submenu">Link #3</a></li>
			<li><a href="#submenu">Link #4</a></li>
		</ul>
	</div>
</nav>

<script>
  $(function() {
    $('nav').carouselMenu();
  });
</script>
