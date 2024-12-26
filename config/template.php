<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */
    'config' => [
        'title'                     => '{$toptitle}',
        'meta'                      => '',
        'keywords'                  => '{$keywords}',
        'description'               => '{$description}',
        'alt_img'                  => '{$vo.title}',
        'a[href=""]'                => '{随机栏目URL}',
        'h2, h3, h1, p, strong, font, a'            => '{随机栏目}',
        'img'                       => '{$vo.pic}',
        'script, link'              => '{$theme_path}/',
        'ul, ol'                        => [
            'li a, li p, li h3, li h4, li h5, li' => '{$vo.title}',
            'li img' => '{$vo.pic}',
            'li a[href=""]' => '{$vo.url}',
            'li span, li p, li strong, li font' => '{$vo.postdate}',
        ]
    ],
    'header' => [
        'title'                     => '{$toptitle}',
        'keywords'                  => '{$keywords}',
        'description'               => '{$description}',
        'script_src'                => '{$theme_path}/',
    ],

    'detail' => [
        'a[href=""]'                => '{随机内容URL}',
        'a'                         => '{随机标题}',
        'h2, h3, h1, p,'            => '{主标题}',
        'img'                       => '{$pic}',
        'span, p, strong, font'     => '{$postdate}',
        'script_src'                => '{$theme_path}/',
    ],
    'list' => [
        'a[href=""]'                => '{随机内容URL}',
        'a'                         => '{随机标题}',
        '{随机栏目}'                 => '{随机栏目}',
        'a'                         => '{随机栏目URL}',
        'h2, h3, h1, p,'            => '{主标题}',
        'img'                       => '{$pic}',
        'span, p, strong, font'     => '{$postdate}',
        'script_src'                => '{$theme_path}/',
        'ul'                        => '{loop type="" row="10" tpl="" islist=""}<li>
                                            <a href="{$vo.url}" > {$vo.title}</a>
                                            <p>{$vo.info}</p>
                                            <p>{$vo.pic}  </p>
                                            <p>{$vo.piclist} </p>
                                            <p>{$vo.hits}   </p>
                                            <p>{$vo.postdate}</p>
                                            <p>{$vo.i}  </p>
                                            <p>{$vo.add_data.附加数据字段}</p>
                                            </li>
                                            {/loop}'
    ],

    '.menu'                      => '{loop type="catelog"}
                                        <li>
                                            <a href="{$vo.url}" > {$vo.title}</a>
                                        </li>
                                    {/loop}',
    'table tbody'               => '{loop type="" row="10" tpl="" islist=""}<tr>
                                        <td>
                                        <a href="{$vo.url}" > {$vo.title}</a>
                                        {$vo.info}
                                        {$vo.pic}
                                        {$vo.piclist}
                                        {$vo.hits}
                                        {$vo.postdate}
                                        {$vo.i}
                                        {$vo.add_data.附加数据字段}</td>
                                        </tr>
                                    {/loop}',
    '.pagination'                => '{loop type="page" tpl="list"}
                                        <li>
                                            <a href="{$vo.url}" > {$vo.title} </a>
                                        </li>
                                    {/loop}',
    '.class_list_alpha'         => '{loop type="" row="10" tpl="" islist=""}
                                        <li>
                                            <a href="{$vo.url}" > {$vo.title}</a
                                        </li>
                                    {/loop}',

];
