<?php
/*
 * project list — kept here so I don't have to dig through index.php
 * every time I want to add or tweak something. just edit the array.
 *
 * fields:
 *   slug      -> used for the anchor + image filename
 *   title     -> shown on the card
 *   year      -> rough timeframe
 *   role      -> what I actually did on it
 *   stack     -> tech I touched
 *   problem   -> what it was trying to solve
 *   challenge -> the part that gave me a headache
 *   learned   -> what stuck with me after
 *   repo      -> optional link, leave '' if none
 */

$projects = [
    [
        'slug'      => 'rfid-system',
        'title'     => 'RFID System w/ Web Monitoring',
        'year'      => 'capstone · 2024',
        'role'      => 'full-stack — me, three sleepless months, one borrowed RFID reader',
        'stack'     => ['PHP', 'MySQL', 'jQuery', 'AJAX', 'HTML/CSS'],
        'problem'   => 'Manual logbook attendance was slow, sketchy, and impossible to audit. We needed an RFID reader tied to a website where admins could actually see the logs and manage the database — students, cards, time-in/out, the works.',
        'challenge' => 'Getting the RFID serial reads into the browser reliably without losing taps. Then making the admin side not feel like a 2008 phpMyAdmin clone. Also: data validation when 200 logs arrive in the same minute during dismissal.',
        'learned'   => 'Always log raw input before you parse it. Hardware lies to you sometimes — your logs are the only thing that doesn\'t.',
        'repo'      => '',
    ],
    [
        'slug'      => 'bonzaire-booking',
        'title'     => 'Booking Website + Admin Panel — Bonzaire',
        'year'      => 'internship · 2026',
        'role'      => 'system developer intern — building real features for an actual business',
        'stack'     => ['PHP', 'MySQL', 'jQuery', 'AJAX', 'JavaScript'],
        'problem'   => 'Bookings were being tracked on paper and spreadsheets. They wanted one place to take reservations, manage products and services, see who booked what, and pull daily/service reports without anyone touching Excel.',
        'challenge' => 'The admin panel kept growing — calendar view of bookings, product management, analytics, service reports, daily reports, user roles. Keeping the UI from turning into a maze was harder than the database part.',
        'learned'   => 'A "small feature" never stays small. Plan the navigation and the schema before you write a single form. And keep the boring report screens consistent — the boss will live there.',
        'repo'      => '',
    ],
];
