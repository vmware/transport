/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { AfterViewChecked, Component, OnInit } from '@angular/core';

import { HighlightService } from '@vmw/transport-docs/services/highlight.service';

@Component({
    selector: 'transport-abstractions',
    templateUrl: './abstractions.component.html',
    styleUrls: ['./abstractions.component.scss'],
})
export class AbstractionsComponent implements OnInit, AfterViewChecked {
    constructor(private highlightService: HighlightService) {}
    public highlighted = false;

    ngOnInit() {}

    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
