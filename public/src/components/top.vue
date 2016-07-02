<template>
  <div>
    <header class="xg-nav-header">
        <slot name="nav_header"></slot>
        <slot name="menu_header"></slot>
    </header>
    <div class="xg-top-main">
        <div class="xg-top-main-f-one">
            <div class="xg-logo-address">
                <slot name="logo_address"></slot>
            </div>
            <div class="xg-search">
                <slot name="nav_serach"></slot>
            </div>
        </div>
        
        <div class="xg-main-menu">
            <slot name="menu_main"></slot>
            <slot name="menu_left"></slot>
        </div>
    </div>
  </div>
</template>

