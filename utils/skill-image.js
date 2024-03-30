import angular from '/public/svg/skills/angular.svg';
import aws from '/public/svg/skills/aws.svg';
import azure from '/public/svg/skills/azure.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import coffeescript from '/public/svg/skills/coffeescript.svg';
import csharp from '/public/svg/skills/csharp.svg';
import css from '/public/svg/skills/css.svg';
import dart from '/public/svg/skills/dart.svg';
import deno from '/public/svg/skills/deno.svg';
import django from '/public/svg/skills/django.svg';
import docker from '/public/svg/skills/docker.svg';
import fastify from '/public/svg/skills/fastify.svg';
import firebase from '/public/svg/skills/firebase.svg';
import git from '/public/svg/skills/git.svg';
import go from '/public/svg/skills/go.svg';
import graphql from '/public/svg/skills/graphql.svg';
import html from '/public/svg/skills/html.svg';
import ionic from '/public/svg/skills/ionic.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import kotlin from '/public/svg/skills/kotlin.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import nestjs from '../public/svg/skills/nestjs.svg';
import nodejs from '../public/svg/skills/nodejs.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import nginx from '/public/svg/skills/nginx.svg';
import nuxtJS from '/public/svg/skills/nuxtJS.svg';
import opencv from '/public/svg/skills/opencv.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import pytorch from '/public/svg/skills/pytorch.svg';
import react from '/public/svg/skills/react.svg';
import strapi from '/public/svg/skills/strapi.svg';
import svelte from '/public/svg/skills/svelte.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import tensorflow from '/public/svg/skills/tensorflow.svg';
import typescript from '/public/svg/skills/typescript.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import vue from '/public/svg/skills/vue.svg';
import vuetifyjs from '/public/svg/skills/vuetifyjs.svg';
import webix from '/public/svg/skills/webix.svg';
import wordpress from '/public/svg/skills/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'nest js':
      return nestjs;
    case 'node js':
      return nodejs;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'fastify':
      return fastify;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'canva':
      return canva;
    default:
      break;
  }
}
