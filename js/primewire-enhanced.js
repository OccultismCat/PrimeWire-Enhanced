// ==UserScript==
// @name         Primewire Enhanced
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Make improvements to primewire.mx website.
// @author       OccultismCat
// @run-at       document-start
// @match        https://primewire.mx/movie/*
// @match        https://primewire.mx/watch-tv/*
// @icon         https://img.primewire.mx/xxrz/400x400/100/e4/0d/e40d2e06a84cbc79731e024ae2ddcb72/e40d2e06a84cbc79731e024ae2ddcb72.png
// ==/UserScript==
(function () {
    'use strict';

    function log(text) {
        log('[PrimeWire-Enhanced]\n' + text);
    }

    function log_alert(text) {
        alert('[PrimeWire-Enhanced]\n' + text);
    }

    function start_loop(func) {
        setInterval(function () {
            //log_alert('loop');
            func();
        }, 2500)
    }

    function remove_element(element) {
        if (element != null) {
            //log_alert('[Press or Hold "ESC" Key To Quickly Read Alerts!]\n\n[Removing element]\n' + element.innerHTML);
            element.remove();
        }
    }

    function remove_elements() {
        const movie_header = document.querySelector('[id="header"]');
        const movie_top_navigation_bar = document.querySelector('[class="prebreadcrumb"]');
        const movie_synopsis = document.querySelector('[class="block_area block_area_home section-description"]');
        const movie_discription = document.querySelector('[class="block_area block_area_home section-detail mb-0"]');
        const movie_top_removed_imgur_image = document.querySelector('[id="hgiks-top"]');
        const movie_player_rating_bar = document.querySelector('[class="watching_player-control"]');
        const movie_removed_imgur_image = document.querySelector('[id="hgiks-middle"]');
        const movie_you_may_also_like = document.querySelector('[class="film_related film_related-list"]');
        const movie_navigation = document.querySelector('[class="f2r-left"]');
        const movie_footer = document.querySelector('[id="footer"]');
        const movie_blank_footer = document.querySelector('[id="st-1"]');
        if (movie_header != null) {
            remove_element(movie_header);
        }
        if (movie_top_navigation_bar != null) {
            remove_element(movie_top_navigation_bar);
        }
        if (movie_synopsis != null) {
            remove_element(movie_synopsis);
        }
        if (movie_discription != null) {
            remove_element(movie_discription);
        }
        if (movie_top_removed_imgur_image != null) {
            remove_element(movie_top_removed_imgur_image);
        }
        if (movie_player_rating_bar != null){
            remove_element(movie_player_rating_bar);
        }
        if (movie_removed_imgur_image != null) {
            remove_element(movie_removed_imgur_image);
        }
        if (movie_you_may_also_like != null) {
            remove_element(movie_you_may_also_like);
        }
        if (movie_navigation != null) {
            remove_element(movie_navigation);
        }
        if (movie_footer != null) {
            remove_element(movie_footer);
        }
        if (movie_blank_footer != null) {
            remove_element(movie_blank_footer);
        }
    }

    function customize_elements() {
        //log_alert('Applying custom element styles!')
        const movie_alert_banner = document.querySelector('[class="alert mb-3"]');
        const movie_player_area = document.querySelector('[class="watching_player-area"]');
        const movie_watch_block = document.querySelector('[id="watch-block"]');
        const movie_episodes = document.querySelector('[id="content-episodes"]');
        const background_watch_block = document.querySelector('[class="detail_page-servers"]');
        const background_episodes = document.querySelector('[class="seasons-list seasons-list-new border-bottom-block"]');
        const background_page = document.querySelector('[id="wrapper"]');
        if (movie_alert_banner != null){
            //log_alert('Setting custom banner style!')
            movie_alert_banner.textContent = '[PrimeWire-Enhanced]'
        }
        if (movie_player_area != null){
            //log_alert('Setting custom style!')
            movie_player_area.setAttribute('style', 'transform: translateY(-192px); height: 846px;')
            //movie_player_area.setAttribute('style', 'transform: translateX(-610px) translateY(-252px); width: 1900px; height: 860px;')
        }
        if (movie_episodes != null){
            movie_episodes.setAttribute('style', 'transform: translateY(-101px);');
        }
        if (movie_watch_block != null){
            movie_watch_block.setAttribute('style', 'transform: translateY(745px);');
        }
        if (background_watch_block != null){
            background_watch_block.setAttribute('style', 'background: black;')
        }
        if (background_episodes != null){
            background_episodes.setAttribute('style', 'background: black;')
        }
        if (background_page != null){
            background_page.setAttribute('style', 'background: black;')
        }
    }

    function remove_scripts(){
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var src = scripts[i].src
            var type = scripts[i].type
            if (src != null && src != '' && src != undefined){
                if (type != null && type != '' && type != undefined)
                log(src + '\n\n' + type)
            }
        }
    }

    window.addEventListener("load", () => {
        if (document.readyState == 'complete'){
            log_alert("\nAlerts bypass PrimeWire's scripts to load this script!\n\n" + 'Press "OK" or "ESC" to continue!')
            remove_elements();
            setTimeout(customize_elements, 1000)
            //customize_elements();
        }
        //start_loop(remove_scripts);
    })
})();